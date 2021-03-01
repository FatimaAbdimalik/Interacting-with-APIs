import React, { useState, useEffect } from "react";
import GetAlbum from "./GetAlbum";
const FindArtist = ({ value, token }) => {
  const [artist, setArtist] = useState();

  useEffect(() => {
    if (token) {
      fetch(`https://api.spotify.com/v1/search?q=${value}&type=artist`, {
        headers: { authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          setArtist(data);
        });
    }
  }, [value]);

  return (
    <div>
      {artist ? <GetAlbum artist={artist} token={token} value={value} /> : null}
    </div>
  );
};

export default FindArtist;
