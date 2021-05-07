import React from "react";
import "./SuggestionList.css";
function SuggestionList({
  suggestionVideos,
  setSelectedSuggestionVideo,
  fetchMoreSuggestionVideos,
}) {
  return (
    <div>
      <ul className="suggestion-list">
        {suggestionVideos.map((item, i) => (
          <li
            key={item.videoId}
            onClick={() => {
              setSelectedSuggestionVideo(item);
            }}
          >
            {item.title}
          </li>
        ))}
        <button onClick={() => fetchMoreSuggestionVideos()}>
          More Suggestions
        </button>
      </ul>
    </div>
  );
}

export default SuggestionList;
