import axios from "axios";

const KEY = "AIzaSyAI3EAjfg850e4EohnF7Pc-MCVos1re8N4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY
  }
});