echo "# testing the cli-commands (nothing should crash)";

ln -s "${PWD}/" "${PWD}/node_modules/solidity-cli"

echo "## help"
node ./dist/src/cli.js --help

echo "## version"
node ./dist/src/cli.js --version

echo "## compile single file"
rm -rf ./test/contracts/Basic.js
rm -rf ./test/contracts/Basic.ts
node ./dist/src/cli.js -i ./test/contracts/Basic.sol
node ./test/contracts/Basic.js # test if valid


rm -rf solidity-cli
