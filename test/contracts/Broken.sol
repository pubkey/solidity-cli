pragma solidity 0.4.24;


/**
 * this contract has broken code
 */
contract Broken {
    address public owner;

    function anyFunction(
        address whoever // broken because unused
    ) public pure returns(bytes32) {
        return "foobar";
    }
}
