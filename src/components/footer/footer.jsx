import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer_container">
          <div className="flex_footer">
            <nav className="footer__navigation">
              <div className="footer-row text-center">
                <Link to={"/Contacts"}>Contacts</Link>
                <Link to={"/PrivacyPolicy"}>Privacy Policy</Link>
                <Link to={"/downloadApp"}>Stories</Link>
                <Link to={"/Questions"}>FAQ</Link>
              </div>
              <div className="text-center">
                <strong>
                  We are not affiliated with TikTok, Douyin or Bytedance.
                </strong>
              </div>
            </nav>
          </div>
          <div className="text-center copyright">Copyright 2023</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
