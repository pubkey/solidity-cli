#!/usr/bin/env node

import * as yargs from 'yargs';
import * as path from 'path';

import version from './version';

import {
    Options
} from './options';

import {
    runCli
} from './index';

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

const argv = yargs.argv;

if (argv.version) {
    console.log(version);
    process.exit();
}

if (argv.help) {
    process.exit();
}

// default -> compile file
const options: Options = {
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

runCli(options);
