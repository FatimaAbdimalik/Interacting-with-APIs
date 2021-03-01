import React, { useState, useEffect } from "react";
import GetAlbum from "./GetAlbum";
const FindArtist = ({ value }) => {
  console.log(value);
  const [token, setToken] = useState(
    // "BQCh3ilfMLHmh38W0_tWCHDbtz_FOtro-cbMM4KArRy_huoU2P6fMX1tSnx9D8azcP9Sp2XdxWmw9QP-VCzOrT5NYbmoSyhZpkoMEREbhKhirZehsJFbqtfAPOfGa2y2U5bT5qP2Sk2PRBqyG2nC99wcZ3DQMUcZ8CGx"
    ""
  );
  const [artist, setArtist] = useState();

  useEffect(() => {
    fetch(`https://spotify-api-feb.herokuapp.com/token`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.access_token);
        setToken(data.access_token);
      });
  }, []);

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
