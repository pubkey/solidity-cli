"use strict";
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var paths_1 = require("../../src/paths");
describe('paths.test.js', function () {
    it('solc-installs', function () {
        assert.ok(paths_1.default.solidityInstalls);
        assert.ok(paths_1.default.solidityInstalls.includes('solidity-cli/solc-installs'));
    });
    it('compile-cache', function () {
        assert.ok(paths_1.default.compileCache);
        assert.ok(paths_1.default.compileCache.includes('solidity-cli/compile-cache'));
    });
});
//# sourceMappingURL=paths.test.js.map