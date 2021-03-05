import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID bCGfhtHcRgLmDsc-JS9bjZELpzilTnuZJMQg8h4NKWc",
  },
});
