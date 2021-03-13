import axios from "axios";
const KEY = "AIzaSyDfQRXkHxRIrEmR67pQt0UxK1KwzVJGvus";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
