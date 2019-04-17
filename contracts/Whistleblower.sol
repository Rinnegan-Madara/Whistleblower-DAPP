pragma solidity ^0.5.0;

contract Whistleblower{
  event logAdded(string, uint, address);

  function setData(string calldata log)external{
    emit logAdded(log, now, msg.sender);
  }
}
