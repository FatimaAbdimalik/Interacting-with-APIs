import React, { useState, useEffect } from "react";
import GetSong from "./GetSong";
const GetSongs = ({ albums, token, value }) => {
  const [songs, setSongs] = useState();
  console.log(songs);
  useEffect(() => {
    fetch(`https://api.spotify.com/v1/albums/${albums.items[0].id}/tracks`, {
      headers: { authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setSongs(data);
      });
  }, [albums.items[0].id]);
  return (
    <div>
      {songs ? (
        <GetSong songs={songs} token={token} value={value} initial={0} />
      ) : null}
    </div>
  );
};

export default GetSongs;
