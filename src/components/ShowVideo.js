import React from "react";
import Iframe from "react-iframe";
import "./ShowVideo.css";

function ShowVideo({ videoId }) {
  return videoId ? (
    <div className="main">
      <Iframe
        width="425"
        height="345"
        url={`http://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allowFullScreen
      ></Iframe>
    </div>
  ) : (
    <div></div>
  );
}

export default ShowVideo;
