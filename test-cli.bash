echo "# testing the cli-commands (nothing should crash)";

echo "## help"
node ./dist/src/cli.js --help

echo "## version"
node ./dist/src/cli.js --version

echo "## compile single file"
node ./dist/src/cli.js -i ./test/contracts/Basic.sol
