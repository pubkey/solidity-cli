/**
 * caches some compiled code
 * so we do not have to recompile all time in tests
 */
import compile from '../../src/compile';
import readCodeFiles from '../../src/read-code';
import paths from '../../src/paths';

import {
    SolcCompiledFile
} from '../../src/compiled.d';
import {
    SourceCode
} from '../../src/read-code';

let basicCompiledPromise: any = null;
export async function basicCompiled(): Promise<{
    source: SourceCode,
    compiled: SolcCompiledFile
}> {
    if (!basicCompiledPromise) {
        basicCompiledPromise = new Promise(async (res) => {
            const files = await readCodeFiles({
                sourceFolder: paths.contractsFolder + '/Basic.sol'
            });
            const compiled = await compile(files[0]);
            res({
                source: files[0],
                compiled
            });
        });
    }
    return basicCompiledPromise;
}
