#!/usr/bin/env node

/**
 * Import Google Analytics pageview data into Firestore
 *
 * Usage:
 *   1. Export CSV from GA4: Reports → Engagement → Pages and screens → Download CSV
 *   2. Get Firebase service account key from Firebase Console → Project Settings → Service accounts
 *   3. Run: node seed-firebase-views.js <path-to-csv>
 *
 * The script maps GA page paths to Blowfish document IDs:
 *   /docs/configuration/ → views_docs-configuration-index.md
 */

import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { createReadStream, existsSync, readFileSync } from 'fs';
import { parse } from 'csv-parse';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Configuration
const SERVICE_ACCOUNT_PATH = join(__dirname, 'serviceAccountKey.json');
const COLLECTION_NAME = 'views';
const DRY_RUN = process.argv.includes('--dry-run');
const FORCE = process.argv.includes('--force');  // Overwrite existing documents

// Check for required files
if (!existsSync(SERVICE_ACCOUNT_PATH)) {
  console.error('Error: serviceAccountKey.json not found in scripts directory');
  console.error('Download it from Firebase Console → Project Settings → Service accounts');
  process.exit(1);
}

const csvPath = process.argv.find(arg => !arg.startsWith('--') && !arg.includes('node') && !arg.includes('seed-firebase-views'));
if (!csvPath) {
  console.error('Usage: node seed-firebase-views.js <path-to-csv> [options]');
  console.error('');
  console.error('Options:');
  console.error('  --dry-run    Preview what would be imported without writing to Firestore');
  console.error('  --force      Overwrite existing documents (useful for re-importing)');
  process.exit(1);
}

if (!existsSync(csvPath)) {
  console.error(`Error: CSV file not found: ${csvPath}`);
  process.exit(1);
}

// Initialize Firebase Admin
const serviceAccount = JSON.parse(readFileSync(SERVICE_ACCOUNT_PATH, 'utf8'));
initializeApp({
  credential: cert(serviceAccount)
});
const db = getFirestore();

// Language prefixes used in Hugo multilingual setup
// These get stripped from URLs to normalize to the base path
const LANGUAGE_PREFIXES = ['en', 'fr', 'zh-cn', 'es', 'de', 'it', 'ja', 'pt-pt', 'pt-br', 'bg', 'bn', 'fa', 'he', 'hu', 'id', 'pl', 'ro', 'ru', 'th', 'tr', 'uk', 'vi', 'zh-tw'];

/**
 * Strip language prefix from a URL path
 * /pt-pt/docs/configuration/ → /docs/configuration/
 * /docs/configuration/ → /docs/configuration/ (unchanged)
 */
function stripLanguagePrefix(pagePath) {
  for (const lang of LANGUAGE_PREFIXES) {
    const prefix = `/${lang}/`;
    if (pagePath.startsWith(prefix)) {
      return '/' + pagePath.slice(prefix.length);
    }
    // Also handle case where lang is at root like /en or /pt-pt
    if (pagePath === `/${lang}` || pagePath === `/${lang}/`) {
      return '/';
    }
  }
  return pagePath;
}

/**
 * Convert a GA page path to a Blowfish Firestore document ID
 *
 * Blowfish uses .File.Path which includes "index.md" for page bundles:
 *   GA path: /docs/configuration/
 *   Hugo file: docs/configuration/index.md
 *   Firestore ID: views_docs-configuration-index.md
 */
function pathToDocId(pagePath) {
  // First strip any language prefix
  pagePath = stripLanguagePrefix(pagePath);

  // Remove leading/trailing slashes
  let cleanPath = pagePath.replace(/^\/|\/$/g, '');

  // Handle special cases
  if (cleanPath === '' || cleanPath === '/') {
    // Homepage: _index.md
    return 'views__index.md';
  }

  // For section pages like /docs/, the file is docs/_index.md
  // For article pages like /docs/configuration/, the file is docs/configuration/index.md
  // We can tell them apart: section pages don't have a second path segment after the section

  const parts = cleanPath.split('/');
  if (parts.length === 1) {
    // Section page like "docs" → docs/_index.md
    cleanPath = `${cleanPath}-_index.md`;
  } else {
    // Article page like "docs/configuration" → docs/configuration/index.md → docs-configuration-index.md
    cleanPath = cleanPath.replace(/\//g, '-') + '-index.md';
  }

  // Replace any remaining slashes with hyphens
  cleanPath = cleanPath.replace(/\//g, '-');

  return `views_${cleanPath}`;
}

/**
 * Parse the GA4 CSV export
 * GA4 exports have metadata lines starting with # before the actual CSV data
 * Aggregates views from different language URLs that map to the same document
 */
async function parseGACSV(filePath) {
  // Use a Map to aggregate views by document ID
  const viewsByDocId = new Map();
  // Track original paths for debugging
  const pathsByDocId = new Map();

  return new Promise((resolve, reject) => {
    createReadStream(filePath)
      .pipe(parse({
        columns: true,
        skip_empty_lines: true,
        trim: true,
        relax_column_count: true,
        comment: '#'  // Skip lines starting with #
      }))
      .on('data', (row) => {
        // GA4 uses various column names depending on the report
        const pagePath = row['Page path'] ||
                        row['Page path and screen class'] ||
                        row['Page'] ||
                        row['Landing page'];

        const views = row['Views'] ||
                     row['Pageviews'] ||
                     row['Sessions'] ||
                     row['Screen views'];

        if (pagePath && views) {
          // Clean up the path and parse views
          const cleanPath = pagePath.trim();
          const viewCount = parseInt(views.replace(/,/g, ''), 10);

          // Only include valid paths (skip query strings, fragments, etc.)
          if (cleanPath.startsWith('/') && !isNaN(viewCount) && viewCount > 0) {
            // Strip language prefix to get normalized path
            const normalizedPath = stripLanguagePrefix(cleanPath);

            // Check if this is a page we want to import
            // Include docs, samples, and other sections relevant to blowfish.page
            const validPrefixes = ['/docs/', '/samples/', '/users/', '/contributors/', '/tags/', '/authors/'];
            const isValidPath = normalizedPath === '/' ||
                               validPrefixes.some(p => normalizedPath.startsWith(p)) ||
                               validPrefixes.some(p => normalizedPath === p.slice(0, -1)); // /docs without trailing slash

            if (isValidPath) {
              const docId = pathToDocId(cleanPath);

              // Take the MAX views (not sum) - handles duplicate URLs like with/without trailing slash
              const existingViews = viewsByDocId.get(docId) || 0;
              viewsByDocId.set(docId, Math.max(existingViews, viewCount));

              // Track paths for debugging
              const existingPaths = pathsByDocId.get(docId) || [];
              existingPaths.push({ path: cleanPath, views: viewCount });
              pathsByDocId.set(docId, existingPaths);
            }
          }
        }
      })
      .on('end', () => {
        // Convert Map to array
        const results = [];
        for (const [docId, totalViews] of viewsByDocId) {
          const paths = pathsByDocId.get(docId);
          results.push({
            docId,
            views: totalViews,
            sourcePaths: paths  // For debugging - shows which URLs were aggregated
          });
        }
        // Sort by views descending
        results.sort((a, b) => b.views - a.views);
        resolve(results);
      })
      .on('error', reject);
  });
}

/**
 * Import data to Firestore
 */
async function importToFirestore(data) {
  console.log(`\nImporting ${data.length} documents to Firestore...`);
  if (FORCE) {
    console.log('FORCE mode: will overwrite existing documents\n');
  }

  // Use batched writes for efficiency (max 500 per batch)
  const batchSize = 500;
  let imported = 0;
  let updated = 0;
  let skipped = 0;

  for (let i = 0; i < data.length; i += batchSize) {
    const batch = db.batch();
    const chunk = data.slice(i, i + batchSize);

    for (const item of chunk) {
      const docRef = db.collection(COLLECTION_NAME).doc(item.docId);

      // Check if document already exists
      const existing = await docRef.get();
      if (existing.exists) {
        if (FORCE) {
          batch.set(docRef, { views: item.views });
          updated++;
        } else {
          console.log(`  Skipping ${item.docId} (already exists with ${existing.data().views} views)`);
          skipped++;
          continue;
        }
      } else {
        batch.set(docRef, { views: item.views });
        imported++;
      }
    }

    if (!DRY_RUN) {
      await batch.commit();
    }

    console.log(`  Processed ${Math.min(i + batchSize, data.length)}/${data.length}`);
  }

  return { imported, updated, skipped };
}

// Main execution
async function main() {
  console.log('Google Analytics to Firestore Import');
  console.log('====================================');
  if (DRY_RUN) {
    console.log('DRY RUN MODE - No changes will be made');
  }
  if (FORCE) {
    console.log('FORCE MODE - Will overwrite existing documents');
  }
  console.log('');

  console.log(`Reading CSV: ${csvPath}`);
  const data = await parseGACSV(csvPath);

  if (data.length === 0) {
    console.error('\nNo valid data found in CSV. Check the file format.');
    console.error('Expected columns: "Page path" (or similar) and "Views" (or similar)');
    process.exit(1);
  }

  console.log(`\nFound ${data.length} unique pages to import:`);
  console.log('');

  // Show preview with aggregation info
  const preview = data.slice(0, 15);
  for (const item of preview) {
    console.log(`  ${item.docId}`);
    console.log(`    Views: ${item.views.toLocaleString()}`);
    if (item.sourcePaths.length > 1) {
      console.log(`    (max from ${item.sourcePaths.length} URL variants):`);
      for (const sp of item.sourcePaths.slice(0, 3)) {
        console.log(`      - ${sp.path}: ${sp.views.toLocaleString()}`);
      }
      if (item.sourcePaths.length > 3) {
        console.log(`      ... and ${item.sourcePaths.length - 3} more`);
      }
    }
  }
  if (data.length > 15) {
    console.log(`  ... and ${data.length - 15} more`);
  }

  // Show total views to verify parsing
  const totalViews = data.reduce((sum, item) => sum + item.views, 0);
  console.log(`\nTotal views across all pages: ${totalViews.toLocaleString()}`)

  if (DRY_RUN) {
    console.log('\n✓ Dry run complete. Run without --dry-run to import.');
    return;
  }

  const { imported, updated, skipped } = await importToFirestore(data);

  console.log('\n====================================');
  console.log(`✓ Import complete!`);
  console.log(`  New documents: ${imported}`);
  if (updated > 0) {
    console.log(`  Updated (--force): ${updated}`);
  }
  if (skipped > 0) {
    console.log(`  Skipped (already exist): ${skipped}`);
  }
}

main().catch((error) => {
  console.error('Error:', error.message);
  process.exit(1);
});
