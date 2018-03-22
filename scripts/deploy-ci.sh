#!/bin/bash

echo "Show environment variables:"
echo "  CIRCLE_BRANCH: $CIRCLE_BRANCH"
echo "----------------------"

echo $CLASPRC_JSON > ~/.clasprc.json
cut -c-30 ~/.clasprc.json
cut -c220- ~/.clasprc.json
npx @google/clasp push
