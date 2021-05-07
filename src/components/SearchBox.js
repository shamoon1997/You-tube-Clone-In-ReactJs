import React from "react";
import "./SearchBox.css";

function SearchBox({ fetchSearchVideo }) {
  return (
    <div className="wrap">
      <div className="search">
        <input
          type="text"
          className="search-term"
          placeholder="Search for Videos?"
          onChange={(event) => fetchSearchVideo(event.target.value)}
        />
        <button type="submit" className="search-button">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
}

export default SearchBox;
