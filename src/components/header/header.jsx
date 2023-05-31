import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [menuRepon, setMenuRepon] = useState(false);
  const handleChangeMenu = () => {
    setMenuRepon(!menuRepon);
  };
  return (
    <>
      <div className="header">
        <div>
          <Link className="d-flex align-items-center ps-4" to={"/"}>
            <img className="logo_page" src="img/tiktok_logo_icon.png" alt="" />
            <div className="name_page">TikTokNoWatermark</div>
          </Link>
        </div>
        <div className="m-auto position-relative">
          <ul className="d-flex  align-items-center">
            <li className="pure-menu-item">
              <Link to={"/"} className="pure-menu-link">
              How does it work
              </Link>
            </li>
            <li className="pure-menu-item">
              <Link to={"/downloadApp"} className="pure-menu-link">
                Download App
              </Link>
            </li>
          </ul>
          <div className="menu_reponsive openbtn" onClick={handleChangeMenu}>
            <FiMenu />
          </div>
          {menuRepon ? (
            <div id="mySidepanel" className="sidepanel">
              <div className="pt-4 pb-2">
                <Link to={"/"} className="pure-menu-link">
                  Main function.
                </Link>
              </div>
              <div className="pt-2 pb-4">
                <Link to={"/downloadApp"} className="pure-menu-link">
                  Download App
                </Link>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="standforukraine">
          <div className="cl__1"></div>
          <div className="cl__2"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
