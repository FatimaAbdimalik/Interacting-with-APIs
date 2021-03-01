import React, { useState, useEffect } from "react";
import "./Home.css";
import Loader from "react-loader-spinner";

const GetSong = ({ songs, value }) => {
  const [lyrics, setLyrics] = useState();

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
    fetch(`https://api.lyrics.ovh/v1/${value}/${title}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLyrics(data);
      });
  }, [value, title]);

  return (
    <div className="result">
      {" "}
      The number of words in the song{" "}
      <span className="song-name">{title} </span> {""}
      is {""} {""}{" "}
      {lyrics ? (
        getLyricsWordCount(lyrics)
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
