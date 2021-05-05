import "./App.css";
import SearchBox from "./components/SearchBox";
import ShowVideo from "./components/ShowVideo";
import SuggestionsVideo from "./components/SuggestionsVideo";
import ShowVideoTitle from "./components/ShowVideoTitle";
import { useState } from "react";

import youtube from "./youtube.png";

function App() {
  let items = [];
  const [searchItems, setsearchItems] = useState([]);
  const [selectedVideo, setselectedVideo] = useState([]);
  const [suggestionVideo, setsuggestionVideo] = useState([]);
  const [videoId, setvideoId] = useState();
  const [maxResult, setmaxResult] = useState(10);
  const [searchedItem, setsearchedItem] = useState();
  const [videoTitle, setvideoTitle] = useState();
  function getSearchItem(searchItem) {
    setsearchedItem(searchItem);
    if (selectedVideo.length > 0) {
      setselectedVideo([]);
    }
    items = [];
    setsearchItems([...items]);
    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${searchItem}&type=video&key=${process.env.REACT_APP_API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.items.forEach((element) => {
          items.push(element.snippet.title);
          setsearchItems([...items]);
        });
      });
  }
  function getSelectedVideo(item) {
    setvideoTitle(item);
    setsuggestionVideo([...searchItems]);
    items = [];
    setsearchItems([...items]);
    let url = `https://youtube.googleapis.com/youtube/v3/search?maxResults=1&q=${item}&key=${process.env.REACT_APP_API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setvideoId(data.items[0].id.videoId);
      });
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
  function SelectedSuggestionVideo(SelectedVideo) {
    setvideoTitle(SelectedVideo);
    let url = `https://youtube.googleapis.com/youtube/v3/search?maxResults=1&q=${SelectedVideo}&key=${process.env.REACT_APP_API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setvideoId(data.items[0].id.videoId);
      });
  }
  function moreSuggestionVideos() {
    setmaxResult(maxResult + 5);
    let url = `https://youtube.googleapis.com/youtube/v3/search?maxResults=${maxResult}&part=snippet&q=${searchedItem}&type=video&key=${process.env.REACT_APP_API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.items.forEach((element) => {
          items.push(element.snippet.title);
          setsuggestionVideo([...items]);
        });
      });
  }
  return (
    <div>
      <img src={youtube} alt="Youtube" className="youtubeLogo"></img>
      <p className="heading">My mini Youtube</p>
      <div className="App">
        <SearchBox getSearchItem={debounce(getSearchItem, 2000)}></SearchBox>
        <ul className="myUL">
          {searchItems.map((item, i) => (
            <li key={item} onClick={() => getSelectedVideo(item)}>
              {item}
            </li>
          ))}
        </ul>
        <ShowVideo videoId={videoId}></ShowVideo>
        <ShowVideoTitle videoTitle={videoTitle}></ShowVideoTitle>
        <SuggestionsVideo
          suggestionVideo={suggestionVideo}
          SelectedSuggestionVideo={SelectedSuggestionVideo}
          moreSuggestionVideos={moreSuggestionVideos}
        ></SuggestionsVideo>
      </div>
    </div>
  );
}

export default App;
