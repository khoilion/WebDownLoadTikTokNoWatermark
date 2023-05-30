import React from "react";
import "./questions.css";
import { Link } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const Questions = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="content-wrapper text-center">
        <div className="content main__content__container">
          <div className="content u-mtop">
            <h1>
              Frequently Asked Questions -{" "}
              <Link to={"/"}>TikTokNoWatermark</Link>
            </h1>
            <div
              className="accordion w-75 m-auto pt-5 pb-5"
              id="accordionExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Why do I see error when trying to download?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body text-start">
                    <p>There are several reasons:</p>
                    <ul>
                      <li>
                        <strong>video is private.</strong> Sorry, we can not
                        deal with it.
                      </li>
                      <li>
                        <strong>video is unavailable.</strong> We are studying
                        this case. We will fix it if possible.
                      </li>
                      <li>
                        <strong>you paste wrong type of links.</strong> At this
                        moment we support downloading from pages which contain a
                        single video. If you paste a user profile link or
                        something else, you will see error.
                      </li>
                      <li>
                        <strong>something is wrong on our side.</strong> If you
                        are sure that your link is correct, try downloading one
                        more time.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Video quality is low. Is there any way to download in HD?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body text-start">
                    <p>
                      We do not change the resolution or any other parameters of
                      the video. We do not edit videos which you download. We
                      only provide a link to the original file which is located
                      on TT servers.
                    </p>
                    <p>
                      Basicly that means that we can't make better quality
                      because the original file is in poor quality.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Do you have a video download app?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Of course, you can download it directly from{" "}
                      <Link to={"/downloadApp"}>Our downloadApp page</Link> and
                      download videos or music from Tik Tok without any
                      problems.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFor">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFor"
                    aria-expanded="false"
                    aria-controls="collapseFor"
                  >
                    I can't install the app, what should I do?
                  </button>
                </h2>
                <div
                  id="collapseFor"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFor"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body text-start">
                    <p>
                      Check your Wi-Fi or Internet to see if there is a
                      connection, and also check if your device has enough free
                      space and is supported by your version of Android.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Can you add a feature of multiple files downloading?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse text-start"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>Not now. We will get back to this question later</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};
export default Questions;
