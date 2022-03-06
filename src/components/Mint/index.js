import React, { useState } from "react";
import { Animated } from "react-animated-css";
import { mintCardData } from "../../constant";
import HeaderLogo from "../../asset/HeaderCenter.png";
import "./css/Mint.css";

const Mint = () => {
  const [count, setCount] = useState(1);

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
                    if (count - 1 !== 0) setCount(count - 1);
                  }}
                >
                  -
                </span>
                <span className="CounterInputDemo">{count}</span>
                <span
                  className="CounterInpuBtn"
                  onClick={() => {
                    if (count + 1 !== 4) setCount(count + 1);
                  }}
                >
                  +
                </span>
              </div>
            </div>
            <div className="CardItem2 gap-3 d-flex flex-column justify-content-center align-items-center position-relative"></div>
          </div>
          <div className="MintBtn"></div>
        </div>
      </Animated>
    </>
  );
};

export { Mint };
