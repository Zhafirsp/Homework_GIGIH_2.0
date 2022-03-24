import React from "react";
import Data from "../single-sample.js";

const Album = () => {
  return (
    <p className="card-text text-muted" id="song-album">{Data.album.name}</p>
  )
}

export default Album;
