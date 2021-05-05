import React from "react";
import Iframe from "react-iframe";
import "./ShowVideo.css";

function ShowVideo(props) {
  if (props.videoId) {
    return (
      <div className="Main">
        <Iframe
          width="425"
          height="345"
          url={`http://www.youtube.com/embed/${props.videoId}`}
          frameBorder="0"
          allowFullScreen
        ></Iframe>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default ShowVideo;
