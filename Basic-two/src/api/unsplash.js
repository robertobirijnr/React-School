import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 9f088b6c63906b43bac1ea9253c9e7f96e0ce201685505fa78c7f4e4b9e822fd "
  }
});
