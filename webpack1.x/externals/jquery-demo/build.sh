#!/bin/sh
rm -rf ./dist
webpack
../node_modules/.bin/webpack-dev-server --content-base dist/ --hot --inline --port 3001
