<p align="center">
  <a href="https://github.com/pubkey/Solidity-Cli">
    <img src="https://cdn.rawgit.com/pubkey/solidity-cli/c2e68782/docs/solidity.svg" width="150px" />
  </a>
</p>

<h1 align="center">Solidity-Cli</h1>
<p align="center">
  <strong>Compile solidity-code faster, easier and more reliable</strong>
</p>

<p align="center">
    <a alt="travis" href="https://travis-ci.org/pubkey/solidity-cli">
        <img src="https://travis-ci.org/pubkey/solidity-cli.svg?branch=master" /></a>
    <a href="https://twitter.com/intent/follow?screen_name=pubkeypubkey">
        <img src="https://img.shields.io/twitter/follow/pubkeypubkey.svg?style=social&logo=twitter"
            alt="follow on Twitter"></a>
</p>

<br/>

* * *

## Features

-   **Caching**

    When you run the compilation as one step of your build-process, it could waste you much time always compiling the same contracts again and again. Solidity-Cli caches the compilation output and only recompiles when the code of your contract actually has changed.

-   **Multi-Threading**

    Compiling multiple contracts can take very long when done on a single process in series. Solidity-Cli compiles multiple contracts with a dedicated process per contract.

-   **Version-Discovery**

    Often you have different contracts with different solidity-versions. It is a struggle to install multiple compiler-versions in the same project. Solidity-Cli detects the version by the contracts code `pragma solidity 0.X.X;` and automatically installs it if needed.

-   **Imports**

    Solidity-Cli automatically manages the import-statements of your code. `import "./OtherContract.sol";` just works.

-   **Typescript-Support**

    When you use typescript, you no longer have to manually add typings to the compilation output. Solidity-Cli generates a javascript and a typescript-file which only has to be imported.

## Usage

### CLI

`npm install -g solidity-cli`

Compile all `*.sol` files from one folder into the destination.

`solidity -i './test/contracts/*.sol' -o ./test/compiled/`

It's recommended to use solidity-cli inside of a script in your `package.json`

`npm install solidity-cli --save-dev`

```json
{
    "scripts": {
      "pretest": "solidity-cli -i './contracts/*.sol' -o ./compiled"
    },
    "dependencies": {
        "solidity-cli": "X.X.X"
    }
}
```

### Programmatically

Compile the given solidity-code.

```js
import * as SolidityCli from 'solidity-cli';
const compiled = await SolidityCli.compileCode(myCode);
```

Compile the the given solidity-file.

```js
import * as SolidityCli from 'solidity-cli';
const compiled = await SolidityCli.compileFile('/home/foobar/myProject/contracts/Basic.sol');
```

Compile all files from one folder and write the output to another.

```js
import * as SolidityCli from 'solidity-cli';
await SolidityCli.runCli({
    sourceFolder: '/home/foobar/myProject/contracts/*.sol',
    destinationFolder: '/home/foobar/myProject/compiled/*.sol'
});
```
