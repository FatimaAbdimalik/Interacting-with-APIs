import React, { useState, useEffect } from "react";
import "./Home.css";
import Loader from "react-loader-spinner";

const GetSong = ({ songs, value, initial }) => {
  const [lyricsCount, setLyricsCount] = useState(initial);
  const [songValue, setSongValue] = useState(value);

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
    fetch(`https://api.lyrics.ovh/v1/${value}/${title}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        let result = getLyricsWordCount(data);

        setLyricsCount(result);
      });
  }, [value, title]);

  return (
    <div className="result">
      {" "}
      The number of words in the song{" "}
      <span className="song-name">{title} </span> {""}
      is {""} {""}{" "}
      {lyricsCount > 0 ? (
        lyricsCount
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
