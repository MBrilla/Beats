import React, { useEffect, useState } from 'react';
import { fetchVideos } from '../api/youtube';

function VideoList() {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  const decodeHtmlEntities = (text) => {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = text;
    return textarea.value;
  };

  useEffect(() => {
    const loadVideos = async () => {
      try {
        const fetchedVideos = await fetchVideos();
        setVideos(fetchedVideos);
      } catch (err) {
        console.error('Error fetching videos:', err);
        setError(err.message);
      }
    };
    loadVideos();
  }, []);

  if (error) return <div className="error-message">Error: {error}</div>;

  return (
    <div className="video-list">
      <h2>ProdByPrimeTime's Beats</h2>
      {videos.length === 0 ? (
        <div className="loading-container">
          <p>Loading your beats...</p>
        </div>
      ) : (
        <div className="video-grid">
          {videos.map((video) => (
            <div key={video.id.videoId} className="video-item">
              <div className="video-container">
                <iframe
                  width="100%"
                  height="215"
                  src={`https://www.youtube.com/embed/${video.id.videoId}`}
                  title={decodeHtmlEntities(video.snippet.title)}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h3>{decodeHtmlEntities(video.snippet.title)}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default VideoList;