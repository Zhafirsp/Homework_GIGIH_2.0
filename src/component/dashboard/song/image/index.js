import React from 'react';
import Data from '../single-sample.js';

const Img = () => {
  return (
    <div>
      <img src={Data.album.images[0].url} width="50" className="card-img-top img-jumbotron" alt="Front-end"/>

    </div>
  );
};

export default Img;
