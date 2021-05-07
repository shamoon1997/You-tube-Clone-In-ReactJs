import "./App.css";
import SearchBox from "./components/SearchBox";
import ShowVideo from "./components/ShowVideo";
import SuggestionsVideo from "./components/SuggestionsVideo";
import ShowVideoTitle from "./components/ShowVideoTitle";
import APIcaller from "./utilities/APICaller.js";
import { useState } from "react";

function App() {
  const [searchItems, setsearchItems] = useState([]);
  const [suggestionVideos, setSuggestionVideos] = useState([]);
  const [videoId, setvideoId] = useState();
  const [maxResults, setmaxResults] = useState(10);
  const [searchedItem, setsearchedItem] = useState();
  const [videoTitle, setvideoTitle] = useState();
  async function getSearchItem(searchItem) {
    setsearchedItem(searchItem);
    setsearchItems([...(await APIcaller(searchItem))]);
  }
  function getSelectedVideo(selectedVideo) {
    setvideoTitle(selectedVideo.title);
    setSuggestionVideos([...searchItems]);
    setvideoId(selectedVideo.videoId);
    setsearchItems([]);
  }
  const debounce = (fn, delay) => {
    let timeoutID;
    return function (...args) {
      if (timeoutID) {
        clearTimeout(timeoutID);
      }
      timeoutID = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };
  function getSelectedSuggestionVideo(SelectedVideo) {
    setvideoTitle(SelectedVideo.title);
    setvideoId(SelectedVideo.videoId);
  }
  async function getMoreSuggestionVideos() {
    setmaxResults(maxResults + 5);
    setSuggestionVideos([...(await APIcaller(searchedItem, maxResults))]);
  }
  return (
    <div>
      <img src="/youtube.png" alt="Youtube" className="youtubeLogo"></img>
      <p className="heading">My mini Youtube</p>
      <div className="app">
        <SearchBox getSearchItem={debounce(getSearchItem, 2000)}></SearchBox>
        <ul className="search-item">
          {searchItems.map((item, i) => (
            <li key={item.videoId} onClick={() => getSelectedVideo(item)}>
              {item.title}
            </li>
          ))}
        </ul>
        <ShowVideo videoId={videoId}></ShowVideo>
        <ShowVideoTitle videoTitle={videoTitle}></ShowVideoTitle>
        <SuggestionsVideo
          suggestionVideos={suggestionVideos}
          selectedSuggestionVideo={getSelectedSuggestionVideo}
          moreSuggestionVideos={getMoreSuggestionVideos}
        ></SuggestionsVideo>
      </div>
    </div>
  );
}

export default App;
