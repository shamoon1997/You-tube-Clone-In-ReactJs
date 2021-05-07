import React from "react";
import "./SuggestionVideo.css";
function SuggestionsVideo(props) {
  return props.suggestionVideos.length ? (
    <div>
      <ul className="suggestion-list">
        {props.suggestionVideos.map((item, i) => (
          <li
            key={item.videoId}
            onClick={() => {
              props.selectedSuggestionVideo(item);
            }}
          >
            {item.title}
          </li>
        ))}
        <button onClick={() => props.moreSuggestionVideos()}>
          More Suggestions
        </button>
      </ul>
    </div>
  ) : (
    <div></div>
  );
}

export default SuggestionsVideo;
