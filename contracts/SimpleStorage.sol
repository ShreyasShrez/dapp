// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract SimpleStorage {
    uint256 storedData;

    // Optional constructor, can initialize storedData if needed
    constructor() {
        storedData = 0; // Default initialization
    }

    function set(uint256 x) public {
        storedData = x;
    }

    function get() public view returns (uint256) {
        return storedData;
    }
}
