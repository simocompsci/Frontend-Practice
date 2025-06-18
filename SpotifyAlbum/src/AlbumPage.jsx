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
    fetch(`https://api.jamendo.com/v3.0/albums/?client_id=${clientId}&id=${albumId}&format=json`)
      .then((res) => res.json())
      .then((data) => {
        if (data.results.length > 0) setAlbum(data.results[0]);
      });

    fetch(`https://api.jamendo.com/v3.0/tracks/?client_id=${clientId}&album_id=${albumId}&format=json`)
      .then((res) => res.json())
      .then((data) => setTracks(data.results));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {album && (
          <div className="flex flex-col md:flex-row items-center gap-10 bg-gray-800/30 p-6 rounded-2xl shadow-xl backdrop-blur-md mb-10">
            <img
              src={album.image}
              alt={album.name}
              className="w-64 h-64 rounded-xl object-cover shadow-lg transition-transform duration-300 hover:scale-105"
            />
            <div className="flex flex-col gap-4">
              <span className="uppercase tracking-wider text-sm text-gray-400">Album</span>
              <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
                {album.name}
              </h1>
              <p className="text-lg flex items-center gap-2 text-gray-300">
                <Music className="w-5 h-5" />
                {album.artist_name}
              </p>
            </div>
          </div>
        )}

        {/* Track list header */}
        <div className="grid grid-cols-[32px_1fr_auto] items-center text-sm text-gray-400 border-b border-gray-700 pb-2 mb-4 px-2">
          <span>#</span>
          <span>Title</span>
          <Clock className="w-4 h-4" />
        </div>

        {/* Tracks */}
        <div className="space-y-2">
          {tracks.map((track, index) => (
            <div
              key={track.id}
              className={`grid grid-cols-[32px_1fr_auto] items-center px-4 py-3 rounded-lg cursor-pointer transition-all ${
                currentTrack === track.audio ? "bg-white/10" : "hover:bg-white/5"
              }`}
              onMouseEnter={() => setIsHovered(track.id)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <div className="text-gray-400">
                {isHovered === track.id ? (
                  <button
                    onClick={() => setCurrentTrack(track.audio)}
                    className="text-white hover:text-green-400"
                  >
                    <Play className="w-4 h-4" />
                  </button>
                ) : (
                  index + 1
                )}
              </div>
              <div className="truncate">
                <h2 className="text-white font-medium truncate">{track.name}</h2>
                <p className="text-sm text-gray-400 truncate">{track.artist_name}</p>
              </div>
              <span className="text-gray-400 text-sm">
                {Math.floor(track.duration / 60)}:{(track.duration % 60).toString().padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Audio player */}
      {currentTrack && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900/90 border-t border-gray-800 backdrop-blur-md p-4 shadow-inner z-50">
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


/**/