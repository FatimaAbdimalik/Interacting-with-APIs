import React, { useState, useEffect } from "react";
import "./Home.css";
import Loader from "react-loader-spinner";
import fetchWithTimeout from "./FetchTimeOut";

const GetSong = ({ songs, value, initial }) => {
  const [lyricsCount, setLyricsCount] = useState(initial);
  const [songValue, setSongValue] = useState(value);
  const [lyricsError, setLyricsError] = useState(null);
  let title = songs.items[0].name;

  const getLyricsWordCount = (str) => {
    let edited = str.lyrics
      .replace(/[\n]/g, "")
      .replace(/[&\/\\#,+()$~%.'":*?<>{}-]/g, "")
      .split(" ");

    for (let i = 0; i < edited.length; i++) {
      if (edited[i] === "") {
        edited.splice(i, 1);
        i--;
      }
    }
    return edited.length;
  };

  useEffect(() => {
    if (songValue !== value) {
      setLyricsCount(0);
    }
  }, [value]);

  useEffect(() => {
    fetchWithTimeout(`https://api.lyrics.ovh/v1/${value}/${title}`, {
      timeout: 3000,
    })
      .then((res) => res.json())
      .then((data) => {
        let result = getLyricsWordCount(data);

        setLyricsCount(result);
      })
      .catch((err) => {
        setLyricsError(`no lyrics for ${title}`);
      });
  }, [value, title]);

  return (
    <div className="result">
      {" "}
      The number of words in the song{" "}
      <span className="song-name">{title} </span> {""}
      is {""} {""}{" "}
      {lyricsCount > 0 ? (
        <span className="number"> {lyricsCount} </span>
      ) : lyricsError ? (
        lyricsError
      ) : (
        <span>
          {" "}
          <Loader type="Circles" color="#00BFFF" height={20} width={20} />{" "}
        </span>
      )}
    </div>
  );
};

export default GetSong;
