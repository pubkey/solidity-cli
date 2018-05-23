"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var version_1 = require("./version");
var paths = {
    base: path.resolve(__dirname, '../../'),
    solidityInstalls: path.resolve(__dirname, '../../', 'solc-installs', version_1.default),
    compileCache: path.resolve(__dirname, '../../', 'compile-cache', version_1.default),
    compileTmpFolder: path.resolve(__dirname, '../../', 'compile-tmp'),
    contractsFolder: path.resolve(__dirname, '../../', './test/contracts/'),
};
exports.default = paths;
//# sourceMappingURL=paths.js.map