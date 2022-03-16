import { useEffect, useState } from "react";
import { Dashboard } from "./view/Dashboard";
import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import Web3 from "web3";

function App() {
  const [metamaskConnected, setMetamaskConnnected] = useState(false);
  const [account, setAccount] = useState();
  const [networkId, setNetworkId] = useState();
  const [isMetamask, setIsMetamask] = useState(true);

  useEffect(async () => {
    await loadWeb3().then((data) => {
      if (data !== false) {
        loadBlockchainData();
      }
    });
  }, []);

  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      // window.alert(
      //   "Non-Ethereum browser detected. You should consider trying MetaMask!"
      // );
      setIsMetamask(false);
      return false;
    }
  };

  const loadBlockchainData = async () => {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    setNetworkId(networkId);

    if (accounts.length == 0) {
      setMetamaskConnnected(false);
    } else {
      setMetamaskConnnected(true);
      setAccount(accounts[0]);
    }

    window.ethereum.on("accountsChanged", (accounts) => {
      if (accounts.length > 0) setAccount(accounts[0]);
      else setAccount();
    });
    window.ethereum.on("networkChanged", (networkId) => {
      setNetworkId(networkId);
    });
  };



  return (
    <Provider store={store}>
      {networkId != 43114 && metamaskConnected && (
        <div className="network-err-msg">
          <h4>Please switch to Avalanche network. <a href="https://support.avax.network/en/articles/4626956-how-do-i-set-up-metamask-on-avalanche" target="_blank" rel="noreferrer">How do I set up Metamask on Avalanche?</a></h4>
        </div>
      )}
      {!isMetamask && (
        <div className="network-err-msg">
          <h4>You should consider trying <a href="http://metamask.io/" target="_blank" rel="noreferrer">MetaMask!</a></h4>
        </div>
      )}
      <div className="App">
        <Dashboard
          metamaskConnected={metamaskConnected}
          setMetamaskConnnected={setMetamaskConnnected}
          account={account}
        />
      </div>
    </Provider>
  );
}

export default App;
