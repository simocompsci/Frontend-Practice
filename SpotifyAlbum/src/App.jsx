// App.jsx
import React, { useEffect, useState, useRef } from 'react';
import { getAccessToken } from './utils';
import './index.css';

const ALBUM_ID = '0ETFjACtuP2ADo6LFhL6HN';
const ACCESS_TOKEN = await getAccessToken();

function App() {
  const [album, setAlbum] = useState(null);
  const [loading, setLoading] = useState(true);
  const [playingTrack, setPlayingTrack] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const fetchAlbumData = async () => {
      try {
        setLoading(true);
        // Fetch album data with additional track fields
        const albumResponse = await fetch(`https://api.spotify.com/v1/albums/${ALBUM_ID}?market=US`, {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        });

        if (!albumResponse.ok) {
          throw new Error(`HTTP error! status: ${albumResponse.status}`);
        }

        const albumData = await albumResponse.json();
        console.log('Track data:', albumData.tracks.items.map(track => ({
          name: track.name,
          preview_url: track.preview_url
        })));
        // Fetch tracks data
        const tracksResponse = await fetch(`https://api.spotify.com/v1/albums/${ALBUM_ID}/tracks?market=US`, {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        });

        if (!tracksResponse.ok) {
          throw new Error(`HTTP error! status: ${tracksResponse.status}`);
        }

        const tracksData = await tracksResponse.json();

        // Combine album and tracks data
        setAlbum({
          ...albumData,
          tracks: tracksData
        });
        
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbumData();
  }, []);

  const handlePlayPause = (track) => {
    if (playingTrack?.id === track.id) {
      audioRef.current.pause();
      setPlayingTrack(null);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      const audio = new Audio(track.preview_url);
      audioRef.current = audio;
      audio.play();
      setPlayingTrack(track);
    }
  };

  if (loading) {
    return <div className="bg-gray-900 min-h-screen text-white p-6">Loading...</div>;
  }

  if (!album) {
    return <div className="bg-gray-900 min-h-screen text-white p-6">Error loading album data</div>;
  }

  return (
    <div className="bg-gray-900 min-h-screen text-white p-6">
      <h1 className="text-2xl font-bold mb-4">{album.name}</h1>
      <ul>
        {album.tracks.items.map(track => (
          <li
            key={track.id}
            className="flex justify-between items-center border-b border-gray-700 py-2"
          >
            <div className="flex items-center gap-4">
              <span className="w-8">{track.track_number}.</span>
              <span>{track.name}</span>
              <span className="text-gray-400 text-sm">
                {Math.floor(track.duration_ms / 60000)}:
                {(Math.floor((track.duration_ms % 60000) / 1000) + '').padStart(2, '0')}
              </span>
            </div>
            {track.preview_url ? (
              <button
                className="bg-green-600 px-4 py-1 rounded hover:bg-green-700 transition-colors"
                onClick={() => handlePlayPause(track)}
              >
                {playingTrack?.id === track.id ? 'Pause' : 'Play'}
              </button>
            ) : (
              <span className="text-gray-500 text-sm px-4">Preview unavailable</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
