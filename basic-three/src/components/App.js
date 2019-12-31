import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../APIs/youtube";

class App extends Component {
  state = {};

  handleTermSubmit = term => {
    youtube.get("/search", {
      params: {
        part: "snippet",
        maxResults: 5,
        q: term
      }
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar handleFormSubmit={this.handleTermSubmit} />
      </div>
    );
  }
}

export default App;
