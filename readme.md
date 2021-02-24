# Yield Farming

## About

Taking flashloan from Dydx, Lending the flashloan to Compound, as it is collateral as to borrow in Compound.
The loan from Compound will be used to repay Dydx. Once some interest is earned as lender in Compound, taking flashloan from Dydx again, repay the loan in Compound that was borrowed before with interest. Claim the underlying token, Comp token and interest earn, repay Dydx again. What's left is the profit earned from this yield farming.

## Architecture:
3 contracts:
1. yield farmer contract : investor to open and close a position by executing functions in this contract
2. dydx contract : to take the flashloan from Dydx
3. compound : lend and borrow from Compound to make profit

## Pre-requisites and programs used versions:

- Truffle v5.1.7 (core: 5.1.7)
- Solidity v0.5.7 (solc-js)
- Node v10.17.0
- npm 6.11.3
- Openzeppelin

## Setting up the development environment

1. Install Truffle: 
    >npm install -g truffle

2. Install Openzepplin
    >npm install @openzeppelin/contracts@2.5.1

3. Install money-leog for using flashloan feature of Dydx
    >npm install @studydefi/money-legos

## Project developed by : Solidity, smart contract, money lego
