import React from "react";
import "./contacts.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const Contacts = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <section>
        <div className="content-wrapper text-center">
          <div className="content main__content__container">
            <div className="content u-mtop">
              <h1>Contact us - Gmail</h1>
              <br />
              <h3>zluffyz2002@gmail.com</h3>
              <hr className="w-75 m-auto" />
              <p className="w-75 m-auto pt-5">
                We are here to answer any questions or requests you have may
                have. Contact us and we'll respond right away when possible. See
                an error? Is there something wrong with the video? History Use
                the form to report!
              </p>
            </div>
          </div>
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Contacts;
