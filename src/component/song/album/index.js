import React from 'react';
import Data from '../single-sample.js';

const Album = () => {
  return (
    <div>
      <p className="card-text text-muted" id="song-album">{Data.album.name}</p>
    </div>
  );
};

export default Album;
