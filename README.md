# solidity-cli
Compile solidity-code faster, easier and more reliable


## Features

- **Caching**

  When you run the compilation as one step of your build-process, it could waste you much time always compiling the same contracts again and again. Solidity-cli caches the compilation output and only recompiles when the code of your contract actually has changed.

- **Multi-Threading**

  Compiling multiple contracts can take very long when done on a single process in series. Solidity-cli compiles multiple contracts with one process per contract.
  
- **Version-Discovery**

  Often you have different contracts with different solidity-versions. It is a struggle to install multiple compiler-versions in the same project. Solidity-cli detects the version by the contracts code `pragma solidity 0.X.X;` and automatically installs it if needed.

- **Imports**

  Soldity-cli automatically manages the import-statements of your code. `import "./OtherContract.sol";` just works.

- **Typescript-Support**

  When you use typescript, you no longer have to manually add typings to the compilation output. Solidity-cli generates a javascript and a typescript-file which only has to be imported.
