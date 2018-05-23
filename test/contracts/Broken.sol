pragma solidity 0.4.24;


/**
 * this contract has broken code
 */
contract Broken {
    address public owner;

    function anyFunction(
        addressFoobar whoever // broken because unknown type
    ) public pure returns(bytes32) {
        return "foobar";
    }
}
