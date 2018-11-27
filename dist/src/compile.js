"use strict";
/**
 * compiles the source-code in an own thread
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
var path = require("path");
var fs = require("fs");
var util = require("util");
var readFile = util.promisify(fs.readFile);
var unlink = util.promisify(fs.unlink);
var async_test_util_1 = require("async-test-util");
var spawn = require('child-process-promise').spawn;
var paths_1 = require("./paths");
var WARNING_REGEX = /^\:[0-9]*:[0-9]*\: Warning:/;
function compile(source) {
    return __awaiter(this, void 0, void 0, function () {
        var base64Code, nodeScriptLocation, stdout, stderr, rand, promise, childProcess, err_1, resultLocation, resultString, resultJson, errors;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    base64Code = Buffer.from(source.code).toString('base64');
                    nodeScriptLocation = path.join(__dirname, 'compile.node.js');
                    stdout = [];
                    stderr = [];
                    rand = async_test_util_1.default.randomString(10);
                    promise = spawn('node', [
                        nodeScriptLocation,
                        base64Code,
                        rand
                    ]);
                    childProcess = promise.childProcess;
                    childProcess.stdout.on('data', function (data) { return stdout.push(data.toString()); });
                    childProcess.stderr.on('data', function (data) { return stderr.push(data.toString()); });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, promise];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    throw new Error("could not compile\n                   # Error: " + err_1 + "\n                   # Output: " + stdout + "\n                   # ErrOut: " + stderr + "\n                   ");
                case 4:
                    resultLocation = path.join(paths_1.default.compileTmpFolder, rand + '.json');
                    return [4 /*yield*/, readFile(resultLocation, 'utf-8')];
                case 5:
                    resultString = _a.sent();
                    return [4 /*yield*/, unlink(resultLocation)];
                case 6:
                    _a.sent();
                    resultJson = JSON.parse(resultString);
                    if (resultJson.version !== source.solcVersion) {
                        throw new Error('solidity-cli: version not equal, this should never happen');
                    }
                    if (resultJson.compiled.errors) {
                        errors = resultJson.compiled.errors.filter(function (err) { return !WARNING_REGEX.test(err); });
                        // const warnings = resultJson.compiled.errors.filter(err => WARNING_REGEX.test(err));
                        if (errors.length > 0) {
                            throw new Error('# could not compile contract ' + source.filename + '\n' +
                                '# errors: \n' +
                                '#' + resultJson.compiled.errors.join('\n#'));
                        }
                    }
                    return [2 /*return*/, resultJson.compiled.contracts];
            }
        });
    });
}
exports.default = compile;
//# sourceMappingURL=compile.js.map