import { getAccessToken } from '../utils';

export const getArtistInfo = async (artistId) => {
  const token = await getAccessToken();

  const res = await fetch(`https://api.spotify.com/v1/artists/${artistId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
};

export const getArtistAlbums = async (artistId) => {
  const token = await getAccessToken();

  const res = await fetch(
    `https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album&limit=10`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await res.json();
  return data.items;
};
