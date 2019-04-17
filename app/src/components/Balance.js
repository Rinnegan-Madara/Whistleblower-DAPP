import React from 'react';

const Balance = ({drizzleState,index}) =>{
  const address = drizzleState.accounts[index];
  return (
    <h2>Balance: {drizzleState.accountBalances[address]}</h2>
  );
};

export default Balance;
