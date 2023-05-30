import React from "react";
import "./homePage.css";
import { Link } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const HomePage = () => {
  return (
    <div>
      <div className="App">
        <div>
          <Header />
        </div>
        <div>
          <img className="w-100" src="img/TikTok_Banner-1-scaled.jpg" alt="" />
        </div>
        <section className="text">
          <div className="text__container">
            <p>
              The fastest and easiest way to save a video is to copy a link and
              paste it in the boxes corresponding to the price of our app Link
            </p>
            <div className="text__desc">
              <p>
                TikTok, ex musically (also known as Douyin in China) is a social
                network for viewing and creating short viral videos. The
                application for this social network takes leading positions for
                the number of installations worldwide. The official app allows
                you to save your videos, as well as your friends’ videos, but
                the bad news is that each saved video will have a watermark
              </p>
              <p>
                TikTokNoWatermark downloader offers you the fastest way to
                download videos from TikTok in MP4 or mp4. Download one video
                and see how it works.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="main__content__homePage">
            <div className="main__content__container__">
              <div className="info-arrow">
                Here are some TikTok downloader main functions:
                <img src="img/info-arrow.png" alt="" />
              </div>
            </div>
            <div className="main__content__container__ d-flex w-100">
              <div className="text w-50">
                <h3>
                  Download TikTok videos, Support Download tiktok videos on PC.
                </h3>
                <p>
                  follow the steps that we have instructed in{" "}
                  <Link to={"/downloadApp"}>Download App</Link>
                </p>
                <p>Please make sure that:</p>
                <ul>
                  <li>You follow the instructions fully;</li>
                </ul>
              </div>
              <div className="w-50 text-center">
                <img src="img/chucnang.png" alt="" />
              </div>
            </div>
            <div className="main__content__container__ d-flex w-100">
              <div className="w-50 text-center">
                <img src="img/th.jfif" alt="" />
              </div>
              <div className="text w-50">
                <h3>
                  The downloaded video will not be stuck with the Tik Tok logo
                  and User ID in above and below the video as normal loading.
                </h3>
                <p>
                  When downloading videos in the app we will not have Tik Tok
                  and User logos ID is in the video
                </p>
                <ul>
                  <li>You follow the instructions fully;</li>
                </ul>
              </div>
            </div>
            <div className="main__content__container__ d-flex w-100">
              <div className="text w-50">
                <h3>
                  All free. We only place 1 ad to maintain maintain operations
                  and support better product development.
                </h3>
                <p>
                  follow the steps that we have instructed in{" "}
                  <Link to={"/downloadApp"}>Download App</Link>
                </p>
                <p>Please make sure that:</p>
                <ul>
                  <li>You follow the instructions fully;</li>
                </ul>
              </div>
              <div className="w-50 text-center">
                <img src="img/tiktokimg3.jpg" alt="" />
              </div>
            </div>
            <div className="main__content__container__ d-flex w-100">
              <div className="w-50 text-center">
                <img src="img/tiktok-logo-tik-tok-2.png" alt="" />
              </div>
              <div className="text w-50">
                <h3>
                  Support downloading TikTok videos in .mp4 format for all
                  device (PC).
                </h3>
                <p>
                  follow the steps that we have instructed in{" "}
                  <Link to={"/downloadApp"}>Download App</Link>
                </p>
                <p>Please make sure that:</p>
                <ul>
                  <li>You follow the instructions fully;</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container text-center mb-5 ">
            <strong>Attention</strong>: TikTokNoWatermark is not a tool of Tiktok, we are not
             has any relationship with Tiktok or ByteDance Ltd. We only support
             help Tiktok users download our videos on Tiktok
             no logo without any problem. If you have problems with
             sites like Tikmate or SSSTiktok, try TikTokNoWatermark, we
             Constantly updated to help users download tiktok videos easily.
             Thank!
          </div>
        </section>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
