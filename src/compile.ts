/**
 * compiles the source-code in an own thread
 */

import {
    SourceCode
} from './read-code';

import * as path from 'path';
import {
    spawn
} from 'child-process-promise';

import {
    SolcCompiledFile
} from './compiled.d';

export default async function compile(source: SourceCode): Promise<SolcCompiledFile> {

    const base64Code = Buffer.from(source.code).toString('base64');
    const nodeScriptLocation = path.join(__dirname, 'compile.node.js');

    const stdout: string[] = [];
    const stderr: string[] = [];
    const promise = spawn('node', [
        nodeScriptLocation,
        base64Code
    ]);
    const childProcess = promise.childProcess;

    childProcess.stdout.on('data', data => stdout.push(data.toString()));
    childProcess.stderr.on('data', data => stderr.push(data.toString()));

    try {
        await promise;
    } catch (err) {
        throw new Error(`could not compile
                   # Error: ${err}
                   # Output: ${stdout}
                   # ErrOut: ${stderr}
                   `);
    }

    const result = JSON.parse(stdout[0]);

    if (!result.success) {
        throw new Error(
            'could not compile contract ' + source.filename + '\n' +
            'errors: \n' +
            result.error.join('\n')
        );
    } else {
        return result.result;
    }
}
