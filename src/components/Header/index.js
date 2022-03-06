import { React } from "react";
import HeaderLogo from "../../asset/HeaderCenter.png";
import "./css/Header.css";
import { FaAlignJustify } from "react-icons/fa";

const Header = () => {
  return (
    <>
      {/* <div className="PageHeader w-100 d-flex justify-content-center">
        <div className="PageHeaderInRow d-flex justify-content-between align-items-center">
          <span className="HeaderItem">Home</span>
          <span className="HeaderItem">Mint</span>
          <img src={HeaderLogo} alt="" className="HeaderLogo"></img>
          <span className="HeaderItem">Docs</span>
          <span className="HeaderItem">Trade</span>
        </div>
        <FaAlignJustify
          className="ToggleBtn"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasTop"
          aria-controls="offcanvasTop"
        />
      </div>
      <div
        class="offcanvas offcanvas-top"
        tabindex="-1"
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
      >
        <div class="offcanvas-header">
          <h5 id="offcanvasTopLabel">Offcanvas top</h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">...</div>
      </div> */}

      {/* <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <img src={HeaderLogo} alt="" className="HeaderLogo1"></img>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse d-flex justify-content-center"
            id="navbarNav"
          >
            <ul class="navbar-nav d-flex PageHeaderInRow">
              <span className="HeaderItem">Home</span>
              <span className="HeaderItem">Mint</span>
              <img src={HeaderLogo} alt="" className="HeaderLogo"></img>
              <span className="HeaderItem">Docs</span>
              <span className="HeaderItem">Trade</span>
            </ul>
          </div>
        </div>
      </nav> */}
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid PageHeader">
          <img
            src={HeaderLogo}
            alt=""
            draggable={false}
            className="HeaderLogo1"
          ></img>

          <button
            class="navbar-toggler NavToggleBtn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaAlignJustify className="ToggleBtn" />
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav TogglePart">
              <a
                class="nav-link active HeaderItem"
                aria-current="page"
                href="#"
                rel="noreferrer"
              >
                Home
              </a>
              <a
                class="nav-link active HeaderItem"
                aria-current="page"
                href="https://mint.avawar.net/"
                target={"_blank"}
                rel="noreferrer"
              >
                Mint
              </a>
              <img
                src={HeaderLogo}
                alt=""
                draggable={false}
                className="HeaderLogo"
              ></img>
              <a
                class="nav-link active HeaderItem"
                aria-current="page"
                href="https://docs.avawar.net/"
                target={"_blank"}
                rel="noreferrer"
              >
                Docs
              </a>
              <a
                class="nav-link active HeaderItem"
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
