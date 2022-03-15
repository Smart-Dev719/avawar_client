import React, { useState, useEffect } from "react";
import { Animated } from "react-animated-css";
import { mintCardData } from "../../constant";
import "./css/Mint.css";
import VoiceIcon from "../../asset/soundiconsmallawt.png";
import VoiceMuteIcon from "../../asset/awtsoudnmute.png";
import useSound from "use-sound";
import AvawarMp3 from "../../asset/AvaWar.mp3";
import { useSelector, useDispatch } from "react-redux";
import { mintNft } from "../../web3/web3";

const Mint = () => {
  const [count, setCount] = useState(1);
  const [walletAddress, setWalletAddress] = useState("");
  const [play, { stop }] = useSound(AvawarMp3);
  const [muteToggle, setMuteToggle] = useState(true);

  const [selectedCount, setSelectedCount] = useState(1);
  const dispatch = useDispatch();
  const mintable = useSelector((state) => state.mint);
  const [mintLoading, setMintLoading] = useState(false);
  const [mintStatus, setMintStatus] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [networkId, setNetworkId] = useState();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    play();
    connectWallet();
    window.ethereum.on("accountsChanged", (accounts) => {
      if (accounts[0] === undefined) {
        setWalletAddress("");
      }
    });
  }, []);

  useEffect(() => {
    if (muteToggle) {
      play();
    } else {
      stop();
    }
  }, [muteToggle]);

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      console.log("MetaMask is installed!");
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      setWalletAddress(account);
    } else {
      alert("Please install Metamask!");
    }
  };

  return (
    <>
      <Animated
        animationIn="bounceIn"
        animationOut="fadeOut"
        animationOutDelay={10}
      >
        <div className="PageMint d-flex justify-content-center flex-column align-items-center w-100">
          <div className="PageMintInRow d-flex justify-content-center">
            <div className="CardItem1 gap-3 d-flex flex-column justify-content-center align-items-center position-relative"></div>
            <div className="CardItem gap-3 d-flex flex-column justify-content-center align-items-center position-relative">
              <div className="CardHeader d-flex flex-column justify-content-center align-items-center position-absolute">
                <div className="CardHeaderMain d-flex gap-2">
                  <span className="CardHeader1">Random</span>
                  <span className="CardHeader2">Stats</span>
                </div>
                <div className="CardSubHeader">STR | AGI | INT | HP</div>
              </div>
              <img
                src={mintCardData.MintCardMain}
                className="CardImg"
                draggable={false}
                alt=""
              />
              <div className="CounterInput position-absolute d-flex justify-content-between">
                <span
                  className="CounterInpuBtn"
                  onClick={() => {
                    if (count !== 1) setCount(count - 1);
                  }}
                >
                  -
                </span>
                <span className="CounterInputDemo">{count}</span>
                <span
                  className="CounterInpuBtn"
                  onClick={() => {
                    if (count !== 10) setCount(count + 1);
                  }}
                >
                  +
                </span>
              </div>
            </div>
            <div className="CardItem2 gap-3 d-flex flex-column justify-content-center align-items-center position-relative"></div>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            {walletAddress ? (
              <div className="MintBtn"></div>
            ) : (
              <div
                className="WalletBtn"
                onClick={() => {
                  connectWallet();
                }}
              ></div>
            )}
            {muteToggle ? (
              <span onClick={() => setMuteToggle(false)}>
                <img
                  src={VoiceIcon}
                  className="mt-3 VoiceBtn"
                  width={50}
                  alt=""
                />
              </span>
            ) : (
              <span onClick={() => setMuteToggle(true)}>
                <img
                  src={VoiceMuteIcon}
                  className="mt-3 VoiceBtn"
                  width={50}
                  alt=""
                />
              </span>
            )}
          </div>
        </div>
      </Animated>
    </>
  );
};

export { Mint };
