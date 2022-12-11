#!/bin/sh
npm run build
sed -i '1s;^;/* eslint-disable */\n;' docs/main.js
npx eslint . --fix
npx stylelint "**/*.{css,scss}" --fix
