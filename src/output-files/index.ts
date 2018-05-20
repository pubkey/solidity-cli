/**
 * generates the output-files from the
 * compiled data
 */

import * as fs from 'fs';
import * as util from 'util';
import * as path from 'path';

const readFile = util.promisify(fs.readFile);

import {
    SolcCompiledFile
} from '../compiled.d';
import {
    SourceCode
} from '../read-code';

import paths from '../paths';

let javascriptTemplatePromise: any = null;

export async function createJavascriptFile(
    source: SourceCode,
    compiled: SolcCompiledFile
): Promise<string> {
    if (!javascriptTemplatePromise) {
        javascriptTemplatePromise = readFile(
            path.join(paths.base, './src/output-files/javascript.template.js'),
            'utf-8'
        );
    }

    let template = await javascriptTemplatePromise;
    template = template.replace('<!-- sourceHash -->', source.codeHash);
    template = template.replace('<!-- compiledObject -->', JSON.stringify(compiled, null, 2));

    return template;
}

export async function createTypescriptFile(compiled: SolcCompiledFile): Promise<string> {
    return 'TODO';
}
