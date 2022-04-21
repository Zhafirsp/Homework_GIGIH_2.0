import React, { useState } from 'react';
import './index.css';

interface IProps {
  url: string;
  title: string;
  artist: string;
  album: string;
  select: boolean;
  toggleSelect: () => void;
}

const Track: React.FC<IProps> = ({ url, title, artist, album, select, toggleSelect }) => {
  const [selected, setSelected] = useState<boolean>(select);

  const handleSelect: () => void = () => {
    setSelected(!selected);
    toggleSelect();
  };

  return (
    <div className="playlist-track">
      <div className="row mb-3 mt-3 text-center">
        <div className="row g-0">
          <div className="card-track border-light">
            <div className="col-md-12">
              <img src={url} alt={title} aria-label="image-track" className="card-img-top-track img-fluid" />
            </div>
            <div className='row'>
              <div className="col-md-12">
                <div className="card-body-track">
                  <h4 aria-label="title-track" className="card-title text-dark"><i className="bi bi-music-note"></i>{title}</h4>
                  <p aria-label="artist-track" className="card-text text-muted" id="song-title">{artist}</p>
                  <p className="garis-pembatas col-md-4 offset-md-3"></p>
                  <p aria-label="album-track" className="card-text text-muted btn-track" id="song-album">{album}</p>
                  <button aria-label="button-track" className={`btn btn-select btn-lg text-light mb-3 ${selected ? 'btn-secondary' : 'btn-success'}`} type="button" id="info" onClick={handleSelect}>
                    {selected ? 'Deselect' : 'Select'}
                  </button>
                  <br></br>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Track;