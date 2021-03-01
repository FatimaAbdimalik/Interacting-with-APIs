import React, { useState, useEffect } from "react";
import GetAlbum from "./GetAlbum";
const FindArtist = ({ value }) => {
  console.log(value);
  const [token, setToken] = useState(
    "BQCvmk_jNVNzZq6yEcpYN0WYDiDQS7WQ9j-S4FSzZ14C6QcE9mXhOOQtmNn9uWf9w71wBPN7VcxR6TvuICPUcAeIVX3v1kKedRqxiSD5bXisjnv8dN2NkuS39fcYnCWbkn9HsuSdIObzy0N_tVbkl4UbHYP_K7q0BH3j"
  );
  const [artist, setArtist] = useState();

  // useEffect(() => {
  //   fetch(`https://spotify-api-feb.herokuapp.com/token`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data.access_token);
  //       setToken(data.access_token);
  //     });
  // }, []);

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
