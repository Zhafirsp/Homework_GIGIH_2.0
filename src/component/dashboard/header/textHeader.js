import React from 'react';
import './index.css';
import IconHeader from './iconHeader';

const TextHeader = () => {
  return (
    <div className="row">
      <div className="col-md-4 pb-2">
        <p className="start">My Playlist</p>
        <h1>Song of the Year<br></br><span>Music is Magic</span></h1>
      </div>
      <div className="col-md-4 pt-4 ms-5">
      <IconHeader />
      </div>
    </div>
  );
};

export default TextHeader;
