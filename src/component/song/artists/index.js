import React from 'react';
import Data from '../single-sample.js';

const Artists = () => {
  return (
    <div>
      <p className="card-text text-muted" id="song-title">{Data.artists[0].name}</p>
    </div>
  );
};

export default Artists;
