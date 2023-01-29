#!/usr/bin/env node

'use strict';

const vendorCopy = require('.');
const path = require('path');
const root = process.cwd();
const pkg = require(path.join(root, 'package.json'));

const isProduction = process.env.npm_config_production === 'true' || process.env.NODE_ENV === 'production';

function logDone(items) {
  items.forEach(item => {
    console.log(`${item.from} => ${item.to}`); // eslint-disable-line no-console
  });
}

function logError(error) {
  console.error('Failed to install vendor modules:', error); // eslint-disable-line no-console
  process.exit(1);
}

const toCopy = pkg.vendorCopy;

if (!isProduction) {
  toCopy.push(...(pkg.devVendorCopy || []));
}

vendorCopy(root, toCopy).then(logDone, logError);
