# This workflow warns and then closes issues and PRs that have had no activity for a specified amount of time.
#
# You can adjust the behavior by modifying this file.
# For more information, see:
# https://github.com/actions/stale
name: Mark stale issues and pull requests

on:
  schedule:
    - cron: "0 1 * * *"
  workflow_dispatch:

jobs:
  stale:
    runs-on: ubuntu-latest
    permissions:
      issues: write
      pull-requests: write

    steps:
      - uses: actions/stale@v11
        with:
          repo-token: ${{ secrets.GITHUB_TOKEN }}
          stale-issue-message:
            "This issue has had no activity for 60 days, so it has been marked
            as stale. If it is still relevant, just leave a comment and the
            label will be removed — otherwise it will close in 14 days. Closed
            issues can always be reopened. Thanks for helping keep the tracker
            healthy!"
          stale-pr-message:
            "This pull request has had no activity for 60 days, so it has been
            marked as stale. If you are still working on it, just leave a
            comment and the label will be removed — otherwise it will close in
            14 days. Closed pull requests can always be reopened."
          close-issue-message:
            "Closing due to inactivity. This is housekeeping, not a judgement
            on the issue — if it is still relevant, please reopen or leave a
            comment and it will get another look."
          stale-issue-label: "no-issue-activity"
          stale-pr-label: "no-pr-activity"
          days-before-stale: 60
          days-before-close: 14
          remove-stale-when-updated: true
          operations-per-run: 100
          exempt-issue-labels: 'keep,security,bug,confirmed'
