import React from "react";
import Data from "../single-sample.js";

const Img = () => {
  return (
    <img src={Data.album.images[0].url} width="50" className="card-img-top" alt="Front-end"/>
  )
}

export default Img;
