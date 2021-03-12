import axios from "axios";
const KEY = "AIzaSyBZJbPfn0ee_CN4g6vbfOIW0FGer6cVhw0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
