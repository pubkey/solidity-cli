/**
 * reads all solidity-files defined in the options
 */

import * as util from 'util';
import * as fs from 'fs';
import * as glob from 'glob';

const globPromise = util.promisify(glob);
const readFile = util.promisify(fs.readFile);

import {
    Options
} from './options';

declare type SourceCode = {
    filename: string,
    code: string,
    codeHash: string
};

/**
 * gets the source-code from the file
 * and parses all imports
 */
export async function getSourceCode(fileName: string): Promise<string> {
    const code = await readFile(fileName, 'utf-8');
    console.log(code);
    const imports = code.match(/import "([^"]*)";/g);
    console.dir(imports);

    return code;
}

export default async function readCodeFiles(options: Options): Promise<SourceCode[]> {
    const filePaths = await globPromise(options.sourceFolder, {});
    const ret = filePaths
        .map(p => ({
            filename: p
        }));

    console.dir(ret);
    return [];
}
