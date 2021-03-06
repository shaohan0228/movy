#!/usr/bin/env node

const WebpackDevServer = require("webpack-dev-server");
const webpack = require("webpack");
const process = require("process");
const path = require("path");
const argv = require("minimist")(process.argv.slice(2));

const file = argv["_"].length > 0 ? path.resolve(argv["_"][0]) : undefined;
const webpackConfig = require("../webpack.config.js")({ file });

const compiler = webpack(webpackConfig);

const server = new WebpackDevServer(compiler, webpackConfig.devServer);

server.listen();
