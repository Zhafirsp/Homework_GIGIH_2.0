import React from "react";
import Data from "../single-sample.js";
import data from '../track.js';

const Img = () => {
  return (
      <div>
    <img src={Data.album.images[0].url} width="50" className="card-img-top" alt="Front-end"/>

    </div>
  )
}

export default Img;
