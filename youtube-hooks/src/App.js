import React, { useState, useEffect } from 'react';
import SearchBar from './components/Searchbar';
import youtube from './API/youtube';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onTermSubmit('Vs Code')
  }, []);

  const onTermSubmit = async (term) => {
    const res = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    setVideos(res.data.items);
    setSelectedVideo(res.data.items[0]);
  };

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  }

  return (
    <div>
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={onVideoSelect} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );

};

export default App;