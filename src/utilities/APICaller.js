const APIcaller = async function (searchedItem, maxResults = 5) {
  let items = [];
  console.log(maxResults);
  console.log(searchedItem);
  let url = `https://youtube.googleapis.com/youtube/v3/search?maxResults=${maxResults}&part=snippet&q=${searchedItem}&type=video&key=${process.env.REACT_APP_API_KEY}`;
  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.items.forEach((element) => {
        const video = {
          videoId: element.id.videoId,
          title: element.snippet.title,
        };
        items.push(video);
      });
    });
  return items;
};
export default APIcaller;
