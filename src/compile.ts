/**
 * compiles the source-code in an own thread
 */

import * as path from 'path';
import * as fs from 'fs';
import * as util from 'util';

const readFile = util.promisify(fs.readFile);
const unlink = util.promisify(fs.unlink);

import AsyncTestUtil from 'async-test-util';

const { spawn } = require('child-process-promise');

import {
    SourceCode
} from './read-code';
import paths from './paths';
import {
    SolcCompiledFile
} from './compiled.d';

const WARNING_REGEX = /^\:[0-9]*:[0-9]*\: Warning:/;

export default async function compile(source: SourceCode): Promise<SolcCompiledFile> {

    const base64Code = Buffer.from(source.code).toString('base64');
    const nodeScriptLocation = path.join(__dirname, 'compile.node.js');

    const stdout: string[] = [];
    const stderr: string[] = [];

    const rand = AsyncTestUtil.randomString(10);
    const promise = spawn('node', [
        nodeScriptLocation,
        base64Code,
        rand
    ]);
    const childProcess = promise.childProcess;

    childProcess.stdout.on('data', (data: any) => stdout.push(data.toString()));
    childProcess.stderr.on('data', (data: any) => stderr.push(data.toString()));

    try {
        await promise;
    } catch (err) {
        throw new Error(`could not compile
                   # Error: ${err}
                   # Output: ${stdout}
                   # ErrOut: ${stderr}
                   `);
    }

    const resultLocation = path.join(paths.compileTmpFolder, rand + '.json');
    const resultString = await readFile(resultLocation, 'utf-8');
    await unlink(resultLocation);
    const resultJson = JSON.parse(resultString);

    if (resultJson.version !== source.solcVersion) {
        throw new Error('solidity-cli: version not equal, this should never happen');
    }

    if (resultJson.compiled.errors) {
        const errors = resultJson.compiled.errors.filter((err: string) => !WARNING_REGEX.test(err));
        // const warnings = resultJson.compiled.errors.filter(err => WARNING_REGEX.test(err));

        if (errors.length > 0) {
            throw new Error(
                '# could not compile contract ' + source.filename + '\n' +
                '# errors: \n' +
                '#' + resultJson.compiled.errors.join('\n#')
            );
        }
    }

    return resultJson.compiled.contracts;
}
