import axios from "axios";
// const KEY = "AIzaSyCYBWlCtEkx1BH5yY5ArQjoltxKASrGlUo";
const API_KEY = "AIzaSyBD7H-bJ209YElu6YNpAxS7bLTgERs4eu4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: API_KEY
  }
});
