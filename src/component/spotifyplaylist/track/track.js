import React, { useState } from 'react';
import './index.css';

export default function Track({ url, title, artist, album, select, toggleSelect }) {
  const [selected, setSelected] = useState(select);

  const handleSelect = () => {
    setSelected(!selected);
    toggleSelect();
  };

  return (
    <div className="playlist">
    <div className="row mb-3 mt-3 justify-content-center text-center">
      <div className="col-md-12 mb-4 mt-4">
        <div className="card border-light">
          <div className="card-body">
            <img src={url} alt={title} width="300" height="300" className="img-fluid rounded-start"/>
            <h4 className="card-title text-dark mt-3"><i className="bi bi-music-note"></i>{title}</h4>
            <p className="card-text text-muted" id="song-title">{artist}</p>
            <p className="garis-pembatas col-md-4 offset-md-3"></p>
            <p className="card-text text-muted" id="song-album">{album}</p>
                  <button className={`btn btn-select btn-lg text-white mb-3 ${selected ? 'btn-dark' : 'btn-secondary'}`} type="button" id="info" onClick={handleSelect}>
                  {selected ? 'Deselect' : 'Select'} 
                  </button>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
} 