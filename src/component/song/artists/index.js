import React from "react";
import Data from "../single-sample.js";

const Artists = () => {
  return (
    <p className="card-text text-muted" id="song-title">{Data.artists[0].name}</p>
  )
}

export default Artists;
