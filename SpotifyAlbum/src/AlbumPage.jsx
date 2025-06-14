import React, { useEffect, useState } from "react";
import { Play, Clock, Music } from "lucide-react";

const clientId = import.meta.env.VITE_JAMENDO_CLIENT_ID;
const albumId = "180175";

export default function AlbumPage() {
  const [album, setAlbum] = useState(null);
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isHovered, setIsHovered] = useState(null);

  useEffect(() => {
    // Fetch album info
    fetch(`https://api.jamendo.com/v3.0/albums/?client_id=${clientId}&id=${albumId}&format=json`)
      .then((res) => res.json())
      .then((data) => {
        if (data.results.length > 0) {
          setAlbum(data.results[0]);
          console.log(data);
        }
      });

    // Fetch tracks for album
    fetch(`https://api.jamendo.com/v3.0/tracks/?client_id=${clientId}&album_id=${albumId}&format=json`)
      .then((res) => res.json())
      .then((data) => setTracks(data.results));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-8">
      {album && (
        <div className="flex items-end gap-8 mb-12 p-6 bg-gradient-to-b from-gray-800/40 to-gray-900/40 rounded-xl backdrop-blur-sm">
          <img
            src={album.image}
            alt={album.name}
            className="w-72 h-72 rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300"
          />
          <div className="flex flex-col gap-2">
            <span className="text-sm uppercase tracking-wider text-gray-400">Album</span>
            <h1 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              {album.name}
            </h1>
            <p className="text-xl text-gray-300 flex items-center gap-2">
              <Music className="w-5 h-5" /> {album.artist_name}
            </p>
          </div>
        </div>
      )}

      <div className="space-y-2">
        <div className="grid grid-cols-[auto,1fr,auto] items-center px-6 py-2 text-gray-400 text-sm border-b border-gray-800">
          <span className="w-8">#</span>
          <span>TITLE</span>
          <Clock className="w-4 h-4" />
        </div>

        {tracks.map((track, index) => (
          <div
            key={track.id}
            className={`grid grid-cols-[auto,1fr,auto] items-center px-6 py-3 rounded-lg hover:bg-white/5 transition-colors ${
              currentTrack === track.audio ? 'bg-white/10' : ''
            }`}
            onMouseEnter={() => setIsHovered(track.id)}
            onMouseLeave={() => setIsHovered(null)}
          >
            <span className="w-8 text-gray-400">
              {isHovered === track.id ? (
                <button
                  onClick={() => setCurrentTrack(track.audio)}
                  className="hover:text-green-400 transition-colors"
                >
                  <Play className="w-4 h-4" />
                </button>
              ) : (
                index + 1
              )}
            </span>
            <div>
              <h2 className="font-medium">{track.name}</h2>
              <p className="text-sm text-gray-400">{track.artist_name}</p>
            </div>
            <span className="text-gray-400 text-sm">
              {Math.floor(track.duration / 60)}:{(track.duration % 60)
                .toString()
                .padStart(2, '0')}
            </span>
          </div>
        ))}
      </div>

      {currentTrack && (
        <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black to-gray-900 p-4 backdrop-blur-lg border-t border-gray-800">
          <audio
            controls
            autoPlay
            src={currentTrack}
            className="w-full [&::-webkit-media-controls-panel]:bg-gray-800 [&::-webkit-media-controls-current-time-display]:text-white [&::-webkit-media-controls-time-remaining-display]:text-white"
          >
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
}
