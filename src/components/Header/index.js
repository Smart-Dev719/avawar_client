import { React } from "react";
import HeaderLogo from "../../asset/HeaderCenter.png";
import "./css/Header.css";
import { FaAlignJustify } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="PageHeader w-100 d-flex justify-content-center">
        <div className="PageHeaderInRow d-flex justify-content-between align-items-center">
          <span className="HeaderItem">Home</span>
          <span className="HeaderItem">Mint</span>
          <img src={HeaderLogo} alt="" className="HeaderLogo"></img>
          <span className="HeaderItem">Docs</span>
          <span className="HeaderItem">Trade</span>
        </div>
        <FaAlignJustify className="ToggleBtn" />
      </div>
    </>
  );
};

export { Header };
