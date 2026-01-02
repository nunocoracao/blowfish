#!/bin/bash

# Script to fetch sponsors and contributors data from GitHub using gh CLI
# Usage: ./update-github-data.sh

set -e

REPO_OWNER="nunocoracao"
REPO_NAME="blowfish"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DATA_DIR="$SCRIPT_DIR/data"

# Ensure data directory exists
mkdir -p "$DATA_DIR"

echo "Fetching sponsors..."

# Fetch sponsors via GraphQL API
# Note: This requires the user to have GitHub Sponsors enabled
gh api graphql -f query='
query {
  user(login: "'"$REPO_OWNER"'") {
    sponsorshipsAsMaintainer(first: 100, activeOnly: true) {
      nodes {
        sponsorEntity {
          ... on User {
            login
            avatarUrl
            url
          }
          ... on Organization {
            login
            avatarUrl
            url
          }
        }
      }
    }
  }
}
' --jq '[.data.user.sponsorshipsAsMaintainer.nodes[] | {
  username: .sponsorEntity.login,
  avatar_url: (.sponsorEntity.avatarUrl + "&s=128"),
  profile_url: .sponsorEntity.url
}]' > "$DATA_DIR/sponsors.json" 2>/dev/null || echo "[]" > "$DATA_DIR/sponsors.json"

sponsor_count=$(jq length "$DATA_DIR/sponsors.json")
echo "Found $sponsor_count sponsors"

echo "Fetching contributors..."

# Fetch all contributors via REST API (paginated)
all_contributors="[]"
page=1

while true; do
  response=$(gh api "repos/$REPO_OWNER/$REPO_NAME/contributors?per_page=100&page=$page" \
    --jq '[.[] | {
      username: .login,
      avatar_url: (.avatar_url + "&s=80"),
      profile_url: .html_url,
      contributions: .contributions
    }]' 2>/dev/null || echo "[]")

  if [ "$response" = "[]" ] || [ -z "$response" ]; then
    break
  fi

  all_contributors=$(echo "$all_contributors" "$response" | jq -s 'add')
  page=$((page + 1))

  # Progress indicator
  current_count=$(echo "$all_contributors" | jq length)
  echo "  Fetched $current_count contributors so far..."
done

# Sort by contributions (descending) and save
echo "$all_contributors" | jq 'sort_by(-.contributions)' > "$DATA_DIR/contributors.json"

contributor_count=$(jq length "$DATA_DIR/contributors.json")
echo "Found $contributor_count contributors"

echo ""
echo "Data saved to:"
echo "  - $DATA_DIR/sponsors.json ($sponsor_count sponsors)"
echo "  - $DATA_DIR/contributors.json ($contributor_count contributors)"
echo ""
echo "Done!"
