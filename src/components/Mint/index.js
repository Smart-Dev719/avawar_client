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
import { onCheckMintable, onGetMintData } from "../../redux/actions";
import swal from 'sweetalert';
import Modal from "react-modal";
import { CloseOutlined } from '@ant-design/icons';

import HeaderLogo from "../../asset/HeaderCenter.png";

const Mint = (props) => {
  const { metamaskConnected, account, setMetamaskConnnected } = props;

  const [play, { stop }] = useSound(AvawarMp3);
  const [muteToggle, setMuteToggle] = useState(true);

  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [preLoading, setPreLoading] = useState(false);
  const [selectedCount, setSelectedCount] = useState(1);
  const mintable = useSelector((state) => state.mint);
  const [mintLoading, setMintLoading] = useState(false);
  const [mintStatus, setMintStatus] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [networkId, setNetworkId] = useState();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (muteToggle) {
      play();
    } else {
      stop();
    }
  }, [muteToggle]);

  const handleConnectWallet = async () => {
    if (window.ethereum) {
      await window.ethereum.enable();
      setMetamaskConnnected(true);
      window.location.reload();
    }
  };

  useEffect(() => {
    if (account) {
      setPreLoading(true);
      dispatch(
        onCheckMintable({
          address: account,
        })
      );
    }
  }, [account]);

  useEffect(async () => {
    if (mintable.count || mintable.failedMsg) {
      setPreLoading(false);
    }
    if (mintable.failedMsg) {
      setMintLoading(false);
      swal("Sorry!", mintable.failedMsg, "warning");
    }
    if (mintable.mintData.success == true) {
      const price = mintable.mintData.price;
      const tokenAmount = mintable.mintData.tokenAmount;
      await mintNft(price, tokenAmount, account)
        .then((data) => {
          setMintStatus(data);
          setMintLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [mintable]);

  useEffect(() => {
    if (mintStatus) {
      setViewModal(true);
    }
  }, [mintStatus]);

  const handleMint = () => {
    setMintLoading(true);
    dispatch(onGetMintData({ address: account, count: selectedCount }));
  };

  const handleClose = () => {
    setViewModal(false);
  };

  return (
    <>
      <Animated
        animationIn="bounceIn"
        animationOut="fadeOut"
        animationOutDelay={10}
      >
        <div className="PageMint d-flex justify-content-center flex-column align-items-center w-100">

          <Modal
            isOpen={viewModal}
            onRequestClose={() => setViewModal(false)}
            contentLabel="Example Modal"
            className="ConnectModal"
            overlayClassName="ConnectModalOverlay"
          >
            <div className="ConnectModalMain d-flex flex-column justify-content-center align-items-center">
              <div className="ModalHeader d-flex flex-column justify-content-between">
                <div className="d-flex justify-content-between">
                  <span className="ModalHeaderText"><img src={HeaderLogo} className="ModalLogo" alt='' /></span><span onClick={() => setViewModal(false)}><CloseOutlined className="ModalCloseBtn" /></span>
                </div>
                <div className="ModalDescription d-flex flex-column align-items-center">
                  <span className="ModalTitle">Congratulations!</span>
                  <a href="https://marketplace.kalao.io/collection/0x5f241e003ba8cb0450dfef2d6fbb508e318a088a" className="ModalText" target="_blank"
                    rel="noreferrer">You have successfully minted your AvaWar NFT !</a>
                </div>
              </div>

            </div>
          </Modal>

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
                    if (selectedCount > 1) setSelectedCount(selectedCount - 1);
                  }}
                >
                  -
                </span>
                <span className="CounterInputDemo">{selectedCount}</span>
                <span
                  className="CounterInpuBtn"
                  onClick={() => {
                    if (selectedCount < 5) setSelectedCount(selectedCount + 1);
                  }}
                >
                  +
                </span>
              </div>
            </div>
            <div className="CardItem2 gap-3 d-flex flex-column justify-content-center align-items-center position-relative"></div>
          </div>
          <div className="MintSection align-items-center justify-content-between gap-2">

            {mintable.totalCount && (
              <a href="https://marketplace.kalao.io/collection/0x5f241e003ba8cb0450dfef2d6fbb508e318a088a" className="MintCount text-white" target="_blank" rel="noreferrer"><span>{mintable.totalCount}/1500</span></a>
            )}

            {/* <span className="MintCount text-white"><span>{mintable.totalCount}/1500</span></span> */}

            <span className="d-flex justify-content-center align-items-center">
              {metamaskConnected && account ? (
                <div className="MintBtn"
                  onClick={handleMint}
                ></div>
              ) : (
                <div
                  className="WalletBtn"
                  onClick={() => {
                    handleConnectWallet();
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
            </span>



          </div>
        </div>
      </Animated>
    </>
  );
};

export { Mint };
