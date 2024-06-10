// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;         


contract paaya {
    uint256 a;
    address payable owner;

    constructor (){
        owner = payable(msg.sender);
    }



    function viewData(uint256 b) public view returns (uint256 c) {
        return a + b;
    }


    function pureData(uint256 d) private pure returns (uint256) {
        return d**2;
    }


    function pay(address payable _a, uint _b) public {
        _a.transfer(_b);
    }
}
