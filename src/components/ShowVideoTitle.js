import React from "react";
import "./ShowVideoTitle.css";
function ShowVideoTitle(props) {
  if (props.videoTitle) {
    return (
      <div className="videoTitle">
        <h4>Title: {props.videoTitle}</h4>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default ShowVideoTitle;
