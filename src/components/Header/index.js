import { React } from "react";
import HeaderLogo from "../../asset/HeaderCenter.png";
import "./css/Header.css";
import { FaAlignJustify } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid PageHeader">
          <a href="https://avawar.net/" rel="" target={"_blank"}>
            <img
              src={HeaderLogo}
              alt=""
              draggable={false}
              className="HeaderLogo1"
            ></img>
          </a>
          <button
            className="navbar-toggler NavToggleBtn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaAlignJustify className="ToggleBtn" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav TogglePart">
              <a
                className="nav-link active HeaderItem"
                aria-current="page"
                href="https://avawar.net/"
                target={"_blank"}
                rel="noreferrer"
              >
                Home
              </a>
              <a
                className="nav-link active HeaderItem"
                aria-current="page"
                href="https://mint.avawar.net/"
                target={"_blank"}
                rel="noreferrer"
              >
                Mint
              </a>
              <a href="https://avawar.net/" target={"_blank"}>
                <img
                  src={HeaderLogo}
                  alt=""
                  draggable={false}
                  className="HeaderLogo"
                ></img>
              </a>
              <a
                className="nav-link active HeaderItem"
                aria-current="page"
                href="https://docs.avawar.net/"
                target={"_blank"}
                rel="noreferrer"
              >
                Docs
              </a>
              <a
                className="nav-link active HeaderItem"
                aria-current="page"
                href="https://marketplace.avawar.net/"
                target={"_blank"}
                rel="noreferrer"
              >
                Trade
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export { Header };
