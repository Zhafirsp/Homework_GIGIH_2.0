import React from 'react';
import Data from '../single-sample.js';

const Title = () => {
  return (
    <h3 className="card-title text-dark"><i className="bi bi-music-note"></i>{Data.name}</h3>


  );
};

export default Title;
