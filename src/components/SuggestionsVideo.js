import React from "react";
import "./SuggestionVideo.css";
function SuggestionsVideo(props) {
  if (props.suggestionVideo.length === 0) {
    return <div></div>;
  } else {
    return (
      <div>
        <ul className="myULL">
          {props.suggestionVideo.map((item, i) => (
            <li key={item} onClick={() => {
                props.SelectedSuggestionVideo(item)
                }}>
              {item}
            </li>
          ))}
          <button onClick={()=> props.moreSuggestionVideos()}>More Suggestions</button>
        </ul>
      </div>
    );
  }
}

export default SuggestionsVideo;
