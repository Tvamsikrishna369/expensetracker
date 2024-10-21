import React, { useState } from 'react';

function WalletBalance() {
  const [walletBalance, setWalletBalance] = useState(5000);

  return (
    <div className="wallet-balance">
      <h2>Wallet Balance: ${walletBalance}</h2>
      <button onClick={() => setWalletBalance(walletBalance + 1000)}>Add $1000</button>
    </div>
  );
}

export default WalletBalance;