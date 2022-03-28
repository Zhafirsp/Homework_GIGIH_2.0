import React from "react";
import Data from "../single-sample.js";
import data from '../track.js';

const Artists = () => {
  return (
      <div>
        <p className="card-text text-muted" id="song-title">{Data.artists[0].name}</p>
      </div>
  )
}

export default Artists;
