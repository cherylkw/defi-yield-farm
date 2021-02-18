pragma solidity ^0.5.7;
pragma experimental ABIEncoderV2;

import "@studydefi/money-legos/dydx/contracts/DydxFlashloanBase.sol";
import "@studydefi/money-legos/dydx/contracts/ICallee.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import './Compound.sol';

contract YieldFarmer is ICallee, DydxFlashloanBase, Compound {
  // for compound
  enum Direction { Deposit, Withdraw } 
  struct Operation {
    address token;
    address cToken;
    Direction direction;
    uint amountProvided;
    uint amountBorrowed;
  }
  address public owner;

  constructor() public {
    owner = msg.sender;
  }

  // @dev take flashloan from flashload and lend it to compound
  //      1. provide collateral to yield farmer contract
  //      2. borrow from Dydx (flashloan)
  //      3. lend flashloan +collateral deposited to compound
  //      4. borrow from compound
  //      5. use the compound loan to reimburse Dydx
  // @param _solo : address of dydx
  // @param _token : address of token to be borrowed
  // @param _cToken : address of cToken in Compound
  // @param _amountProvided : part of the token we want to provide to invest in compound
  // @param _amountBorrowed : how much to borrow in Flashloan
  function openPosition(
    address _solo, 
    address _token, 
    address _cToken,
    uint _amountProvided, 
    uint _amountBorrowed
  ) external {
    require(msg.sender == owner, 'only owner');
    IERC20(_token).transferFrom(msg.sender, address(this), _amountProvided);
    // 2 wei is used to pay for flashloan
    _initiateFlashloan(_solo, _token, _cToken, Direction.Deposit, _amountProvided - 2, _amountBorrowed);
  }

  // @dev 1. inital the close position function
  //      2. take flashloan from dydx
  //      3. use the flashloan to reimburse compound's loan which was borrowed (+ interest) in open position before
  //      4. redeem the lending (intial collateral + interest earned + COMP token) from compound
  //      5. use the amount take back from compound to reimburse the flashloan from dydx
  //      6. take profit from remaining balance + COMP token
  function closePosition(
    address _solo, 
    address _token, 
    address _cToken
  ) external {
    require(msg.sender == owner, 'only owner');
    // 2 wei is transfer to this contract to pay for flashloan
    IERC20(_token).transferFrom(msg.sender, address(this), 2);
    // reward from Compound for both lender and borrower
    claimComp();
    uint borrowBalance = getBorrowBalance(_cToken);
    // in order to reimburse the loan from compound, we need to borrow flashloan from dydx
    // borrowBalance is the borrow amount + interest
    _initiateFlashloan(_solo, _token, _cToken, Direction.Withdraw, 0, borrowBalance);

    // transfer comp token to the sender of this transaction
    address compAddress = getCompAddress();
    IERC20 comp = IERC20(compAddress);
    uint compBalance = comp.balanceOf(address(this));
    comp.transfer(msg.sender, compBalance);

    // transfer underlying token which is being lended to compound before, to sender of transaction
    // this is the token send initally to this contract, plus the interest earned from lending to compound
    IERC20 token = IERC20(_token);
    uint tokenBalance = token.balanceOf(address(this));
    token.transfer(msg.sender, tokenBalance);
  }

  // @dev callback function once user received amount from flashload
  // @param sender: dydx contract
  // @param account : borrower
  // @param data: operation struct
  function callFunction(
    address sender,
    Account.Info memory account, 
    bytes memory data
  ) public {
    Operation memory operation = abi.decode(data, (Operation));

    if(operation.direction == Direction.Deposit) {
      // lend money to Compound
      supply(operation.cToken, operation.amountProvided + operation.amountBorrowed);
      // leverage a collateral in order to borrow
      enterMarket(operation.cToken);
      // borrow
      borrow(operation.cToken, operation.amountBorrowed);
    } else {
      repayBorrow(operation.cToken, operation.amountBorrowed);
      uint cTokenBalance = getcTokenBalance(operation.cToken);
      // redeem underlying token to user smart contract
      redeem(operation.cToken, cTokenBalance);
    }
  }

  // @param _solo : address of dydx
  // @param _token : address of token to be borrowed
  // @param _cToken : address of cToken in Compound
  // @param _direction : borrow from Compound or reimbuse the money
  // @param _amountProvided : how much user provide(to be used in process)
  // @param _amountBorrowed : how much to borrow in Flashloan
  function _initiateFlashloan(
    address _solo, 
    address _token, 
    address _cToken, 
    Direction _direction,
    uint _amountProvided, 
    uint _amountBorrowed
  )
    internal
  {
    // pointer to dydx smart contract
    ISoloMargin solo = ISoloMargin(_solo);

    // Get marketId from token address
    uint256 marketId = _getMarketIdFromTokenAddress(_solo, _token);

    // Calculate repay amount (_amount + (2 wei))
    // Money that user borrow
    // Approve transfer from
    uint256 repayAmount = _getRepaymentAmountInternal(_amountBorrowed);
    IERC20(_token).approve(_solo, repayAmount);

    // To initate the flashloan
    // 1. Withdraw $
    // 2. Call callFunction(...)
    // 3. Deposit back $
    Actions.ActionArgs[] memory operations = new Actions.ActionArgs[](3);

    // borrow the amount
    operations[0] = _getWithdrawAction(marketId, _amountBorrowed);
    // operate
    operations[1] = _getCallAction(
        // Encode MyCustomData for callFunction
        abi.encode(Operation({
          token: _token, 
          cToken: _cToken, 
          direction: _direction,
          amountProvided: _amountProvided, 
          amountBorrowed: _amountBorrowed
        }))
    );
    // reimburse the flashloan
    operations[2] = _getDepositAction(marketId, repayAmount);

    Account.Info[] memory accountInfos = new Account.Info[](1);
    accountInfos[0] = _getAccountInfo();
    // initiate the flashloan
    solo.operate(accountInfos, operations);
  }
}
