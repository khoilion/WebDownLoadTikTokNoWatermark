import React from "react";
import "./banner.css";

// const ZIP_FIlE_URL = "http://localhost:3000/tiktok-win32-x64.zip";
const Banner = () => {
  // const downloadFileAtUrl = (url) => {
  //   fetch(url)
  //     .then((Response) => Response.blob())
  //     .then((blob) => {
  //       const blobURL = window.URL.createObjectURL(new Blob([blob]));
  //       console.log(blobURL, "bloURL");
  //     });
  //   const fileName = url.split("/").pop();
  //   const aTag = document.createElement("a");
  //   aTag.href = url;
  //   aTag.setAttribute("download", fileName);
  //   document.body.appendChild(aTag);
  //   aTag.click();
  //   aTag.remove();
  // };
  return (
    <>
      <div className="banner">
        <h1 className="bigmessage">Download TikTok MP4</h1>
        <div className="text-center">
          <a
            className="btn__download "
            href="https://github.com/khoilion/WebDownLoadTikTokNoWatermark/releases/download/v1.0.0/tiktok-win32-x64.zip"
        
          >
            Download App
          </a>
        </div>
      </div>
    </>
  );
};

export default Banner;
