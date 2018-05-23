/// <reference path="../node_modules/@types/mocha/index.d.ts" />

import * as assert from 'assert';
import AsyncTestUtil from 'async-test-util';
import * as path from 'path';
import * as fs from 'fs';

import paths from '../src/paths';
import {
    readCodeFile
} from '../src/read-code';

import * as SolidityCli from '../src/index';

describe('integration.test.js', () => {
    it('.generateOutput()', async () => {
        const source = await readCodeFile(paths.contractsFolder + '/Basic.sol');
        const artifact = await SolidityCli.generateOutput(source);
        assert.ok(artifact);
    });
    it('.compileCode()', async () => {
        const source = await readCodeFile(paths.contractsFolder + '/Basic.sol');
        const compiled = await SolidityCli.compileCode(source.code);
        assert.ok(compiled);
    });
    it('.compileFile()', async () => {
        const compiled = await SolidityCli.compileFile(paths.contractsFolder + '/Basic.sol');
        assert.ok(compiled);
    });
    it('.runCli()', async function() {
        this.timeout(1000 * 30);
        const rand = AsyncTestUtil.randomString(10);
        const destinationFolder = path.join(paths.base, './tmp', rand);
        await SolidityCli.runCli({
            sourceFolder: paths.contractsFolder + '/subdir/*.sol',
            destinationFolder
        });

        assert.ok(fs.existsSync(destinationFolder + '/Basic.js'));
        assert.ok(fs.existsSync(destinationFolder + '/Basic.ts'));
        assert.ok(fs.existsSync(destinationFolder + '/Import.js'));
        assert.ok(fs.existsSync(destinationFolder + '/Import.ts'));
    });
});
