import React, { useState } from "react";

export default function Track({ url, title, artist, toggleSelect }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = () => {
    setIsSelected(!isSelected);
    toggleSelect();
  };

  return (

    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={url} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{artist}</p>
            <button
        className={`btn btn-select ${
          isSelected ? "btn-primary" : "btn-secondary"
        }`}
        onClick={handleSelect}>
        {isSelected ? "Deselect" : "Select"}
      </button>
          </div>
        </div>
      </div>
    </div>


  );
}
