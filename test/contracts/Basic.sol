pragma solidity 0.4.24;


contract Basic {
    address public owner;

    /**
     * default function
     */
    function() public payable {
       // got money
    }

    function anyFunction() public pure returns(bytes32) {
        return "foobar";
    }
}
