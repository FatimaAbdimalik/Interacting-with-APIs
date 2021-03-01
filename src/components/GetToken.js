import React, { useState, useEffect } from "react";

const GetToken = () => {
  const [token, setToken] = useState();

  useEffect(() => {
    fetch(`https://spotify-api-feb.herokuapp.com/token`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.access_token);
        setToken(data.access_token);
      });
  });

  return <div></div>;
};

export default GetToken;
