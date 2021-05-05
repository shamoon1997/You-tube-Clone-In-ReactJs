import React from "react";
import "./SearchBox.css";

function SearchBox(props) {
  return (
    <div className="wrap">
      <div className="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="Search for Videos?"
          onChange={(event) => props.getSearchItem(event.target.value)}
        />
        <button type="submit" className="searchButton">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
}

export default SearchBox;
