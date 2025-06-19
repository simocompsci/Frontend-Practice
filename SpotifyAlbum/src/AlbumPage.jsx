import React, { useEffect, useState } from "react";
import { Play, Clock, Music, Heart, Share2, Download } from "lucide-react";

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
    <div className="min-h-screen bg-[#121212] text-white">
      <div className="sticky top-0 z-10 bg-gradient-to-b from-violet-900/80 to-[#121212] px-8 pt-20 pb-8">
        {album && (
          <div className="flex items-center gap-8">
            <img
              src={album.image}
              alt={album.name}
              className="w-60 h-60 shadow-2xl rounded-md transform hover:rotate-3 transition-all duration-300"
            />
            <div className="flex flex-col gap-4">
              <span className="text-xs font-medium tracking-widest uppercase">Album</span>
              <h1 className="text-7xl font-bold">{album.name}</h1>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <img 
                  src={album.image} 
                  alt={album.artist_name}
                  className="w-6 h-6 rounded-full" 
                />
                <span className="hover:underline cursor-pointer">{album.artist_name}</span>
                <span>•</span>
                <span>{tracks.length} songs</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="px-8 py-4">
        <div className="flex items-center gap-6 mb-8">
          <button className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center hover:scale-105 transition-transform">
            <Play className="w-7 h-7 fill-black text-black" />
          </button>
          <Heart className="w-8 h-8 text-gray-400 hover:text-white transition-colors cursor-pointer" />
          <Share2 className="w-6 h-6 text-gray-400 hover:text-white transition-colors cursor-pointer" />
          <Download className="w-6 h-6 text-gray-400 hover:text-white transition-colors cursor-pointer" />
        </div>

        <div className="grid grid-cols-[auto,1fr,auto] items-center px-6 py-2 text-gray-400 text-sm border-b border-gray-800/50">
          <span className="w-12">#</span>
          <span>TITLE</span>
          <Clock className="w-5 h-5" />
        </div>

        {tracks.map((track, index) => (
          <div
            key={track.id}
            className={`grid grid-cols-[auto,1fr,auto] items-center px-6 py-3 rounded-md hover:bg-gray-800/30 group ${
              currentTrack === track.audio ? 'bg-gray-800/50' : ''
            }`}
            onMouseEnter={() => setIsHovered(track.id)}
            onMouseLeave={() => setIsHovered(null)}
          >
            <span className="w-12 text-base">
              {isHovered === track.id ? (
                <button
                  onClick={() => setCurrentTrack(track.audio)}
                  className="text-white hover:text-green-400 transition-colors"
                >
                  <Play className="w-4 h-4 fill-current" />
                </button>
              ) : (
                <span className={`${currentTrack === track.audio ? 'text-green-400' : 'text-gray-400'}`}>
                  {index + 1}
                </span>
              )}
            </span>
            <div>
              <h2 className={`font-medium ${currentTrack === track.audio ? 'text-green-400' : ''}`}>
                {track.name}
              </h2>
              <p className="text-sm text-gray-400 group-hover:text-gray-300">{track.artist_name}</p>
            </div>
            <span className="text-gray-400 text-sm">
              {Math.floor(track.duration / 60)}:{(track.duration % 60).toString().padStart(2, '0')}
            </span>
          </div>
        ))}
      </div>

      {currentTrack && (
        <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-[#121212] to-black/80 backdrop-blur-xl border-t border-white/5 p-4">
          <audio
            controls
            autoPlay
            src={currentTrack}
            className="w-full h-12 [&::-webkit-media-controls-panel]:bg-[#121212] [&::-webkit-media-controls-current-time-display]:text-white [&::-webkit-media-controls-time-remaining-display]:text-white"
          >
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
}


//**/