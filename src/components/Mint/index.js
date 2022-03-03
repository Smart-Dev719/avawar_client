import React from "react";
import { Animated } from "react-animated-css";
import { mintCardData } from "../../constant";
import "./css/Mint.css";

const Mint = () => {
  return (
    <>
      <Animated
        animationIn="bounceIn"
        animationOut="fadeOut"
        animationOutDelay={10}
      >
        <div className="PageMint d-flex justify-content-center w-100">
          <div className="PageMintInRow d-flex justify-content-center">
            {mintCardData.map((item, index) => {
              return (
                <div
                  className="CardItem d-flex flex-column justify-content-center align-items-center gap-3"
                  key={index}
                >
                  <div className="CardHeader d-flex flex-column justify-content-center align-items-center">
                    <div className="CardHeaderMain d-flex gap-2">
                      <span className="CardHeader1">{item.Header1}</span>
                      <span className="CardHeader2">{item.Header2}</span>
                    </div>
                    <div className="CardSubHeader">{item.HeaderSub}</div>
                  </div>
                  {/* <div className="CardImgPart"> */}
                  <img
                    src={item.img}
                    className="CardImg"
                    draggable={false}
                    alt=""
                  />
                  {/* </div> */}
                  <div className="MintBtn">
                    <span></span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Animated>
    </>
  );
};

export { Mint };
