import React from "react";
import "./App.css";
import { PhantomConnector } from "web3-react-v6-phantom";
import { useWeb3React } from "@web3-react/core";

const phantom = new PhantomConnector({
  supportedChainIds: [1, 5], // mainnet, goerli
});

function App() {
  const { activate, deactivate, account } = useWeb3React();
  const handleConnect = async () => {
    try {
      await activate(phantom);
    } catch (e) {
      console.error(e);
    }
  };
  const handleDisconnect = () => {
    try {
      deactivate();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="App">
      <h1>Web3-React Connector</h1>
      <div className="wallet-connector">
        <button onClick={handleConnect}>Connect to Phantom!</button>
        <button onClick={handleDisconnect}>Disconnect</button>
        <div>
          <p>account: {account}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
