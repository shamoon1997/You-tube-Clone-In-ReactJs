import React from "react";
import Iframe from "react-iframe";
import "./VideoPlayer.css";

function ShowVideo({ videoId, videoTitle }) {
  return (
    <div>
      <div className="main">
        <Iframe
          width="425"
          height="345"
          url={`http://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allowFullScreen
        ></Iframe>
      </div>
      <h4>Title: {videoTitle}</h4>
    </div>
  );
}

export default ShowVideo;
