import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <div >
          <Link className="d-flex align-items-center ps-4" to={"/"}>
          <img className="logo_page" src="img/tiktok_logo_icon.png" alt="" />
          <div className="name_page">TikTokNoWatermark</div>
          </Link>
        </div>
        <div className="m-auto">
          <ul className="d-flex  align-items-center">
            <li className="pure-menu-item">
              <Link to={"/"} className="pure-menu-link">
                Main function.
              </Link>
            </li>
            <li className="pure-menu-item">
              <Link to={"/downloadApp"} className="pure-menu-link">
                Download App
              </Link>
            </li>
          </ul>
        </div>
        <div className="standforukraine">
          <div className="cl__1">

          </div>
          <div className="cl__2">

          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
