#!/bin/sh
rm -rf ./dist
webpack --colors --profile --display-modules --display-error-details
../node_modules/.bin/webpack-dev-server  --content-base dist/