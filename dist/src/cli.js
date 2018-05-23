#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs");
var path = require("path");
var version_1 = require("./version");
var index_1 = require("./index");
yargs
    .usage('Usage: solidity [options] [input_file...]')
    .option('version', {
    describe: 'Show version and exit.',
    type: 'boolean'
})
    .option('input-dir', {
    alias: 'i',
    describe: 'Input directory for the solidity-files.',
    type: 'string'
})
    .option('output-dir', {
    alias: 'o',
    describe: 'Output directory for compiled contracts.',
    type: 'string'
})
    .global(['version'])
    .showHelpOnFail(false, 'Specify --help for available options')
    .help();
var argv = yargs.argv;
if (argv.version) {
    console.log(version_1.default);
    process.exit();
}
if (argv.help) {
    process.exit();
}
// default -> compile file
var options = {
    sourceFolder: path.join(process.cwd(), argv.inputDir),
    destinationFolder: argv.outputDir
};
if (options.destinationFolder) {
    options.destinationFolder = path.join(process.cwd(), options.destinationFolder);
}
// console.log('bbbb');
// console.dir(yargs.argv);
// console.dir(options);
// console.log(process.cwd());
index_1.runCli(options);
//# sourceMappingURL=cli.js.map