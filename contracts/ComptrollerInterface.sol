pragma solidity ^0.5.7;

// Compound
interface ComptrollerInterface {
  function enterMarkets(address[] calldata cTokens) external returns (uint[] memory);
  function claimComp(address holder) external;
  function getCompAddress() external view returns(address);
}
