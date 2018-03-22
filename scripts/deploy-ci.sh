#!/bin/bash
echo $CLASPRC_JSON > ~/.clasprc.json
npx @google/clasp push
