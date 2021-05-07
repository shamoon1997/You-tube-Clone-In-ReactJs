import { useState } from "react";
import "./App.css";
import SearchBox from "./components/SearchBox";
import VideoPlayer from "./components/VideoPlayer";
import SuggestionList from "./components/SuggestionList";
import getVideos from "./utilities/getVideos";

function App() {
  const [searchVideos, setSearchVideos] = useState([]);
  const [suggestionVideos, setSuggestionVideos] = useState([]);
  const [videoId, setVideoId] = useState();
  const [maxResults, setMaxResults] = useState(10);
  const [searchedVideo, setSearchedVideo] = useState();
  const [videoTitle, setVideoTitle] = useState();
  async function fetchSearchVideo(searchVideo) {
    setSearchedVideo(searchVideo);
    setSearchVideos([...(await getVideos(searchVideo))]);
  }
  function fetchSelectedVideo(selectedVideo) {
    setVideoTitle(selectedVideo.title);
    setSuggestionVideos([...searchVideos]);
    setVideoId(selectedVideo.videoId);
    setSearchVideos([]);
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
  function setSelectedSuggestionVideo(SelectedVideo) {
    setVideoTitle(SelectedVideo.title);
    setVideoId(SelectedVideo.videoId);
  }
  async function fetchMoreSuggestionVideos() {
    setMaxResults(maxResults + 5);
    setSuggestionVideos([...(await getVideos(searchedVideo, maxResults))]);
  }
  return (
    <div>
      <img src="/youtube.png" alt="Youtube" className="youtube-logo"></img>
      <p className="heading">My mini Youtube</p>
      <div className="app">
        <SearchBox
          fetchSearchVideo={debounce(fetchSearchVideo, 2000)}
        ></SearchBox>
        <ul className="search-item">
          {searchVideos.map((item, i) => (
            <li key={item.videoId} onClick={() => fetchSelectedVideo(item)}>
              {item.title}
            </li>
          ))}
        </ul>
        {videoId && videoTitle && (
          <>
            <VideoPlayer
              videoId={videoId}
              videoTitle={videoTitle}
            ></VideoPlayer>
            <SuggestionList
              suggestionVideos={suggestionVideos}
              setSelectedSuggestionVideo={setSelectedSuggestionVideo}
              fetchMoreSuggestionVideos={fetchMoreSuggestionVideos}
            ></SuggestionList>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
