import React from "react";
import music_icon from "./music_icon.jpg";
import "./Home.css";
const Main = () => {
  return (
    <div>
      {" "}
      <div>
        <div className="text">Find Your Singer ..... Find the Lyrics</div>
        <img src={music_icon} alt="music note" className="image" />
      </div>
      <div className="exp">
        Find your Faviourate Singer, and get the number of words in a chosen
        song's lyrics
      </div>
    </div>
  );
};

export default Main;
