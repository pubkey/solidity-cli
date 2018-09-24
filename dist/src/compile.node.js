"use strict";
/**
 * node-script that takes solidity-code as base64 and outputs a json with the compile-output
 * we use this to make multi-threading easiser
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("util");
var fs = require("fs");
var shelljs = require("shelljs");
var path = require("path");
var writeFile = util.promisify(fs.writeFile);
var read_code_1 = require("./read-code");
var paths_1 = require("./paths");
// const codeBase64 = 'cHJhZ21hIHNvbGlkaXR5IDAuNC4yNDsNCg0KDQpjb250cmFjdCBCYXNpYyB7DQogICAgYWRkcmVzcyBwdWJsaWMgb3duZXI7DQp9DQo=';
// const codeBase64 = 'cHJhZ21hIHNvbGlkaXR5IDAuNC4yNDsNCg0KDQpjb250cmFjdCBCYXNpYyB7DQogICAgYWRkcmVzczEgcHVibGljIG93bmVyOw0KfQ0K'; // broken
var codeBase64 = process.argv[2];
var location = process.argv[3] + '.json';
var code = Buffer.from(codeBase64, 'base64').toString();
var run = function (code) {
    return __awaiter(this, void 0, void 0, function () {
        var solcVersion, solc, compiled, out;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    solcVersion = read_code_1.getSolcVersion(code);
                    solc = require(paths_1.default.solidityInstalls + '/' + solcVersion + '/node_modules/solc');
                    compiled = solc.compile(code, 1);
                    out = {
                        version: solcVersion,
                        compiled: compiled
                    };
                    // create destination if not exists
                    shelljs.mkdir('-p', paths_1.default.compileTmpFolder);
                    return [4 /*yield*/, writeFile(path.join(paths_1.default.compileTmpFolder, location), JSON.stringify(out, null, 2))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
};
run(code);
//# sourceMappingURL=compile.node.js.map