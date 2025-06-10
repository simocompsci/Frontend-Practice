import React, { useEffect, useState } from "react";
import { Play } from "lucide-react";

const clientId = import.meta.env.VITE_JAMENDO_CLIENT_ID; // Replace with your Jamendo API client_id
const albumId = "180175"; // Replace with an actual Jamendo album ID

export default function AlbumPage() {
  const [album, setAlbum] = useState(null);
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);

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
    <div className="p-6 max-w-4xl mx-auto">
      {album && (
        <div className="mb-8 text-center">
          <img
            src={album.image}
            alt={album.name}
            className="rounded-2xl mx-auto shadow-lg w-64 h-64 object-cover"
          />
          <h1 className="text-3xl font-bold mt-4">{album.name}</h1>
          <p className="text-lg text-gray-600">{album.artist_name}</p>
        </div>
      )}

      <div className="grid gap-4">
        {tracks.map((track) => (
          <div key={track.id} className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4 p-0">
              <div>
                <h2 className="text-lg font-semibold">{track.name}</h2>
                <p className="text-sm text-gray-500">Duration: {Math.floor(track.duration / 60)}:{(track.duration % 60).toString().padStart(2, '0')}</p>
              </div>
            </div>
            <button
              onClick={() => setCurrentTrack(track.audio)}
              className="rounded-full p-2"
            >
              <Play className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>

      {currentTrack && (
        <div className="mt-8 text-center">
          <audio controls autoPlay src={currentTrack} className="w-full rounded-xl">
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
}
