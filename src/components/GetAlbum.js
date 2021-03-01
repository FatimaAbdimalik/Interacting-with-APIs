import React, { useState, useEffect } from "react";
import GetSongs from "./GetSongs";
const GetAlbum = ({ artist, token, value }) => {
  const [albums, setAlbums] = useState();
  useEffect(() => {
    fetch(
      `https://api.spotify.com/v1/artists/${artist.artists.items[0].id}/albums`,
      {
        headers: { authorization: `Bearer ${token}` },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setAlbums(data);
      });
  }, [artist.artists.items[0].id]);

  return (
    <div>
      {albums ? <GetSongs albums={albums} token={token} value={value} /> : null}
    </div>
  );
};

export default GetAlbum;
