import React from "react";
import "./ShowVideoTitle.css";
function ShowVideoTitle({ videoTitle }) {
  return videoTitle ? (
    <div className="video-title">
      <h4>Title: {videoTitle}</h4>
    </div>
  ) : (
    <div></div>
  );
}

export default ShowVideoTitle;
