"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var compiled = {
    ":Basic": {
        "assembly": {
            ".code": [
                {
                    "begin": 26,
                    "end": 259,
                    "name": "PUSH",
                    "value": "80"
                },
                {
                    "begin": 26,
                    "end": 259,
                    "name": "PUSH",
                    "value": "40"
                },
                {
                    "begin": 26,
                    "end": 259,
                    "name": "MSTORE"
                },
                {
                    "begin": 26,
                    "end": 259,
                    "name": "CALLVALUE"
                },
                {
                    "begin": 8,
                    "end": 17,
                    "name": "DUP1"
                },
                {
                    "begin": 5,
                    "end": 7,
                    "name": "ISZERO"
                },
                {
                    "begin": 5,
                    "end": 7,
                    "name": "PUSH [tag]",
                    "value": "1"
                },
                {
                    "begin": 5,
                    "end": 7,
                    "name": "JUMPI"
                },
                {
                    "begin": 30,
                    "end": 31,
                    "name": "PUSH",
                    "value": "0"
                },
                {
                    "begin": 27,
                    "end": 28,
                    "name": "DUP1"
                },
                {
                    "begin": 20,
                    "end": 32,
                    "name": "REVERT"
                },
                {
                    "begin": 5,
                    "end": 7,
                    "name": "tag",
                    "value": "1"
                },
                {
                    "begin": 5,
                    "end": 7,
                    "name": "JUMPDEST"
                },
                {
                    "begin": 26,
                    "end": 259,
                    "name": "POP"
                },
                {
                    "begin": 26,
                    "end": 259,
                    "name": "PUSH #[$]",
                    "value": "0000000000000000000000000000000000000000000000000000000000000000"
                },
                {
                    "begin": 26,
                    "end": 259,
                    "name": "DUP1"
                },
                {
                    "begin": 26,
                    "end": 259,
                    "name": "PUSH [$]",
                    "value": "0000000000000000000000000000000000000000000000000000000000000000"
                },
                {
                    "begin": 26,
                    "end": 259,
                    "name": "PUSH",
                    "value": "0"
                },
                {
                    "begin": 26,
                    "end": 259,
                    "name": "CODECOPY"
                },
                {
                    "begin": 26,
                    "end": 259,
                    "name": "PUSH",
                    "value": "0"
                },
                {
                    "begin": 26,
                    "end": 259,
                    "name": "RETURN"
                }
            ],
            ".data": {
                "0": {
                    ".auxdata": "a165627a7a72305820d3969c316678da556342396e9a75a93a3cd9b3ec6b246e5c1662088378aeb0290029",
                    ".code": [
                        {
                            "begin": 26,
                            "end": 259,
                            "name": "PUSH",
                            "value": "80"
                        },
                        {
                            "begin": 26,
                            "end": 259,
                            "name": "PUSH",
                            "value": "40"
                        },
                        {
                            "begin": 26,
                            "end": 259,
                            "name": "MSTORE"
                        },
                        {
                            "begin": 26,
                            "end": 259,
                            "name": "PUSH",
                            "value": "4"
                        },
                        {
                            "begin": 26,
                            "end": 259,
                            "name": "CALLDATASIZE"
                        },
                        {
                            "begin": 26,
                            "end": 259,
                            "name": "LT"
                        },
                        {
                            "begin": 26,
                            "end": 259,
                            "name": "PUSH [tag]",
                            "value": "1"
                        },
                        {
                            "begin": 26,
                            "end": 259,
                            "name": "JUMPI"
                        },
                        {
                            "begin": 26,
                            "end": 259,
                            "name": "PUSH",
                            "value": "FFFFFFFF"
                        },
                        {
                            "begin": 26,
                            "end": 259,
                            "name": "PUSH",
                            "value": "100000000000000000000000000000000000000000000000000000000"
                        },
                        {
                            "begin": 26,
                            "end": 259,
                            "name": "PUSH",
                            "value": "0"
                        },
                        {
                            "begin": 26,
                            "end": 259,
                            "name": "CALLDATALOAD"
                        },
                        {
                            "begin": 26,
                            "end": 259,
                            "name": "DIV"
                        },
                        {
                            "begin": 26,
                            "end": 259,
                            "name": "AND"
                        },
                        {
                            "begin": 26,
                            "end": 259,
                            "name": "PUSH",
                            "value": "E21A23F"
                        },
                        {
                            "begin": 26,
                            "end": 259,
                            "name": "DUP2"
                        },
                        {
                            "begin": 26,
                            "end": 259,
                            "name": "EQ"
                        },
                        {
                            "begin": 26,
                            "end": 259,
                            "name": "PUSH [tag]",
                            "value": "2"
                        },
                        {
                            "begin": 26,
                            "end": 259,
                            "name": "JUMPI"
                        },
                        {
                            "begin": 26,
                            "end": 259,
                            "name": "DUP1"
                        },
                        {
                            "begin": 26,
                            "end": 259,
                            "name": "PUSH",
                            "value": "8DA5CB5B"
                        },
                        {
                            "begin": 26,
                            "end": 259,
                            "name": "EQ"
                        },
                        {
                            "begin": 26,
                            "end": 259,
                            "name": "PUSH [tag]",
                            "value": "3"
                        },
                        {
                            "begin": 26,
                            "end": 259,
                            "name": "JUMPI"
                        },
                        {
                            "begin": 26,
                            "end": 259,
                            "name": "tag",
                            "value": "1"
                        },
                        {
                            "begin": 26,
                            "end": 259,
                            "name": "JUMPDEST"
                        },
                        {
                            "begin": 26,
                            "end": 259,
                            "name": "STOP"
                        },
                        {
                            "begin": 173,
                            "end": 257,
                            "name": "tag",
                            "value": "2"
                        },
                        {
                            "begin": 173,
                            "end": 257,
                            "name": "JUMPDEST"
                        },
                        {
                            "begin": 173,
                            "end": 257,
                            "name": "CALLVALUE"
                        },
                        {
                            "begin": 8,
                            "end": 17,
                            "name": "DUP1"
                        },
                        {
                            "begin": 5,
                            "end": 7,
                            "name": "ISZERO"
                        },
                        {
                            "begin": 5,
                            "end": 7,
                            "name": "PUSH [tag]",
                            "value": "6"
                        },
                        {
                            "begin": 5,
                            "end": 7,
                            "name": "JUMPI"
                        },
                        {
                            "begin": 30,
                            "end": 31,
                            "name": "PUSH",
                            "value": "0"
                        },
                        {
                            "begin": 27,
                            "end": 28,
                            "name": "DUP1"
                        },
                        {
                            "begin": 20,
                            "end": 32,
                            "name": "REVERT"
                        },
                        {
                            "begin": 5,
                            "end": 7,
                            "name": "tag",
                            "value": "6"
                        },
                        {
                            "begin": 5,
                            "end": 7,
                            "name": "JUMPDEST"
                        },
                        {
                            "begin": 173,
                            "end": 257,
                            "name": "POP"
                        },
                        {
                            "begin": 173,
                            "end": 257,
                            "name": "PUSH [tag]",
                            "value": "7"
                        },
                        {
                            "begin": 173,
                            "end": 257,
                            "name": "PUSH [tag]",
                            "value": "8"
                        },
                        {
                            "begin": 173,
                            "end": 257,
                            "name": "JUMP"
                        },
                        {
                            "begin": 173,
                            "end": 257,
                            "name": "tag",
                            "value": "7"
                        },
                        {
                            "begin": 173,
                            "end": 257,
                            "name": "JUMPDEST"
                        },
                        {
                            "begin": 173,
                            "end": 257,
                            "name": "PUSH",
                            "value": "40"
                        },
                        {
                            "begin": 173,
                            "end": 257,
                            "name": "DUP1"
                        },
                        {
                            "begin": 173,
                            "end": 257,
                            "name": "MLOAD"
                        },
                        {
                            "begin": 173,
                            "end": 257,
                            "name": "SWAP2"
                        },
                        {
                            "begin": 173,
                            "end": 257,
                            "name": "DUP3"
                        },
                        {
                            "begin": 173,
                            "end": 257,
                            "name": "MSTORE"
                        },
                        {
                            "begin": 173,
                            "end": 257,
                            "name": "MLOAD"
                        },
                        {
                            "begin": 173,
                            "end": 257,
                            "name": "SWAP1"
                        },
                        {
                            "begin": 173,
                            "end": 257,
                            "name": "DUP2"
                        },
                        {
                            "begin": 173,
                            "end": 257,
                            "name": "SWAP1"
                        },
                        {
                            "begin": 173,
                            "end": 257,
                            "name": "SUB"
                        },
                        {
                            "begin": 173,
                            "end": 257,
                            "name": "PUSH",
                            "value": "20"
                        },
                        {
                            "begin": 173,
                            "end": 257,
                            "name": "ADD"
                        },
                        {
                            "begin": 173,
                            "end": 257,
                            "name": "SWAP1"
                        },
                        {
                            "begin": 173,
                            "end": 257,
                            "name": "RETURN"
                        },
                        {
                            "begin": 47,
                            "end": 67,
                            "name": "tag",
                            "value": "3"
                        },
                        {
                            "begin": 47,
                            "end": 67,
                            "name": "JUMPDEST"
                        },
                        {
                            "begin": 47,
                            "end": 67,
                            "name": "CALLVALUE"
                        },
                        {
                            "begin": 8,
                            "end": 17,
                            "name": "DUP1"
                        },
                        {
                            "begin": 5,
                            "end": 7,
                            "name": "ISZERO"
                        },
                        {
                            "begin": 5,
                            "end": 7,
                            "name": "PUSH [tag]",
                            "value": "9"
                        },
                        {
                            "begin": 5,
                            "end": 7,
                            "name": "JUMPI"
                        },
                        {
                            "begin": 30,
                            "end": 31,
                            "name": "PUSH",
                            "value": "0"
                        },
                        {
                            "begin": 27,
                            "end": 28,
                            "name": "DUP1"
                        },
                        {
                            "begin": 20,
                            "end": 32,
                            "name": "REVERT"
                        },
                        {
                            "begin": 5,
                            "end": 7,
                            "name": "tag",
                            "value": "9"
                        },
                        {
                            "begin": 5,
                            "end": 7,
                            "name": "JUMPDEST"
                        },
                        {
                            "begin": 47,
                            "end": 67,
                            "name": "POP"
                        },
                        {
                            "begin": 47,
                            "end": 67,
                            "name": "PUSH [tag]",
                            "value": "10"
                        },
                        {
                            "begin": 47,
                            "end": 67,
                            "name": "PUSH [tag]",
                            "value": "11"
                        },
                        {
                            "begin": 47,
                            "end": 67,
                            "name": "JUMP"
                        },
                        {
                            "begin": 47,
                            "end": 67,
                            "name": "tag",
                            "value": "10"
                        },
                        {
                            "begin": 47,
                            "end": 67,
                            "name": "JUMPDEST"
                        },
                        {
                            "begin": 47,
                            "end": 67,
                            "name": "PUSH",
                            "value": "40"
                        },
                        {
                            "begin": 47,
                            "end": 67,
                            "name": "DUP1"
                        },
                        {
                            "begin": 47,
                            "end": 67,
                            "name": "MLOAD"
                        },
                        {
                            "begin": 47,
                            "end": 67,
                            "name": "PUSH",
                            "value": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
                        },
                        {
                            "begin": 47,
                            "end": 67,
                            "name": "SWAP1"
                        },
                        {
                            "begin": 47,
                            "end": 67,
                            "name": "SWAP3"
                        },
                        {
                            "begin": 47,
                            "end": 67,
                            "name": "AND"
                        },
                        {
                            "begin": 47,
                            "end": 67,
                            "name": "DUP3"
                        },
                        {
                            "begin": 47,
                            "end": 67,
                            "name": "MSTORE"
                        },
                        {
                            "begin": 47,
                            "end": 67,
                            "name": "MLOAD"
                        },
                        {
                            "begin": 47,
                            "end": 67,
                            "name": "SWAP1"
                        },
                        {
                            "begin": 47,
                            "end": 67,
                            "name": "DUP2"
                        },
                        {
                            "begin": 47,
                            "end": 67,
                            "name": "SWAP1"
                        },
                        {
                            "begin": 47,
                            "end": 67,
                            "name": "SUB"
                        },
                        {
                            "begin": 47,
                            "end": 67,
                            "name": "PUSH",
                            "value": "20"
                        },
                        {
                            "begin": 47,
                            "end": 67,
                            "name": "ADD"
                        },
                        {
                            "begin": 47,
                            "end": 67,
                            "name": "SWAP1"
                        },
                        {
                            "begin": 47,
                            "end": 67,
                            "name": "RETURN"
                        },
                        {
                            "begin": 173,
                            "end": 257,
                            "name": "tag",
                            "value": "8"
                        },
                        {
                            "begin": 173,
                            "end": 257,
                            "name": "JUMPDEST"
                        },
                        {
                            "begin": 235,
                            "end": 250,
                            "name": "PUSH",
                            "value": "666F6F6261720000000000000000000000000000000000000000000000000000"
                        },
                        {
                            "begin": 173,
                            "end": 257,
                            "name": "SWAP1"
                        },
                        {
                            "begin": 173,
                            "end": 257,
                            "name": "JUMP",
                            "value": "[out]"
                        },
                        {
                            "begin": 47,
                            "end": 67,
                            "name": "tag",
                            "value": "11"
                        },
                        {
                            "begin": 47,
                            "end": 67,
                            "name": "JUMPDEST"
                        },
                        {
                            "begin": 47,
                            "end": 67,
                            "name": "PUSH",
                            "value": "0"
                        },
                        {
                            "begin": 47,
                            "end": 67,
                            "name": "SLOAD"
                        },
                        {
                            "begin": 47,
                            "end": 67,
                            "name": "PUSH",
                            "value": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
                        },
                        {
                            "begin": 47,
                            "end": 67,
                            "name": "AND"
                        },
                        {
                            "begin": 47,
                            "end": 67,
                            "name": "DUP2"
                        },
                        {
                            "begin": 47,
                            "end": 67,
                            "name": "JUMP",
                            "value": "[out]"
                        }
                    ]
                }
            }
        },
        "bytecode": "608060405234801561001057600080fd5b50610115806100206000396000f30060806040526004361060485763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630e21a23f8114604a5780638da5cb5b14606e575b005b348015605557600080fd5b50605c60a9565b60408051918252519081900360200190f35b348015607957600080fd5b50608060cd565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b7f666f6f626172000000000000000000000000000000000000000000000000000090565b60005473ffffffffffffffffffffffffffffffffffffffff16815600a165627a7a72305820d3969c316678da556342396e9a75a93a3cd9b3ec6b246e5c1662088378aeb0290029",
        "functionHashes": {
            "anyFunction()": "0e21a23f",
            "owner()": "8da5cb5b"
        },
        "gasEstimates": {
            "creation": [
                105,
                55400
            ],
            "external": {
                "": 104,
                "anyFunction()": 184,
                "owner()": 421
            },
            "internal": {}
        },
        "interface": "[{\"constant\":true,\"inputs\":[],\"name\":\"anyFunction\",\"outputs\":[{\"name\":\"\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"fallback\"}]",
        "metadata": "{\"compiler\":{\"version\":\"0.4.24+commit.e67f0147\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[],\"name\":\"anyFunction\",\"outputs\":[{\"name\":\"\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"fallback\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"\":\"Basic\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"\":{\"keccak256\":\"0x2f58e05f843795f4c09e22915e9e0e13bb43479ece4f15502d0a05f9cce62d2f\",\"urls\":[\"bzzr://01bb1c3a7055b8461e3c211eef78cc5a2dacbfae5ea5043a602cb5b6eb048f7c\"]}},\"version\":1}",
        "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x115 DUP1 PUSH2 0x20 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH1 0x48 JUMPI PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH4 0xE21A23F DUP2 EQ PUSH1 0x4A JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH1 0x6E JUMPI JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH1 0x55 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x5C PUSH1 0xA9 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD SWAP2 DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH1 0x79 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x80 PUSH1 0xCD JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SWAP1 SWAP3 AND DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST PUSH32 0x666F6F6261720000000000000000000000000000000000000000000000000000 SWAP1 JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 0xd3 SWAP7 SWAP13 BALANCE PUSH7 0x78DA556342396E SWAP11 PUSH22 0xA93A3CD9B3EC6B246E5C1662088378AEB02900290000 ",
        "runtimeBytecode": "60806040526004361060485763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630e21a23f8114604a5780638da5cb5b14606e575b005b348015605557600080fd5b50605c60a9565b60408051918252519081900360200190f35b348015607957600080fd5b50608060cd565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b7f666f6f626172000000000000000000000000000000000000000000000000000090565b60005473ffffffffffffffffffffffffffffffffffffffff16815600a165627a7a72305820d3969c316678da556342396e9a75a93a3cd9b3ec6b246e5c1662088378aeb0290029",
        "srcmap": "26:233:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;26:233:0;;;;;;;",
        "srcmapRuntime": "26:233:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;173:84;;8:9:-1;5:2;;;30:1;27;20:12;5:2;173:84:0;;;;;;;;;;;;;;;;;;;;47:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;47:20:0;;;;;;;;;;;;;;;;;;;;;;;173:84;235:15;173:84;:::o;47:20::-;;;;;;:::o"
    }
};
exports.default = compiled;
//# sourceMappingURL=Basic.js.map