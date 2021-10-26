import React, { Component } from 'react';

export default class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  componentDidMount() {
    this.onTermSubmit('Vs Code');
  }

  onTermSubmit = async (term) => {
    const res = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({
      videos: res.data.items,
      selectedVideo: res.data.items[0]
    });
  };

  render() {
    return (
      <SearchBar onFormSubmit={this.onTermSubmit} />
    );
  }

};