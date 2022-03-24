import React from "react";
import './index.css';
import IconHeader from './iconHeader';

const TextHeader = () => {
  return (
    <div className="row">
          <div className="col-md-6 pb-2">
            <p className="start">My Playlist</p>
              <h1>Music Player<br></br><span className="highlight">For you who loves music</span></h1>
          </div>

          <IconHeader />
        </div>
  )
}

export default TextHeader;