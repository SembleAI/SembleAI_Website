#!/bin/bash

# Build the site
npm run build

# Ensure .nojekyll file exists
touch dist/.nojekyll

# Copy CNAME file to dist if it doesn't exist
if [ ! -f dist/CNAME ]; then
  cp public/CNAME dist/
fi

# Deploy to GitHub Pages
npx gh-pages -d dist 