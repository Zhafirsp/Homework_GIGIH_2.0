import React from 'react';
import './index.css';
import IconHeader from './iconHeader';

const TextHeader = (props) => {
  return (
    <div className="row">
      <div className="col-md-6 pb-2">
        <p className="start">{props.header.title}</p>
        <h1>{props.header.type}<br></br><span>{props.header.text}</span></h1>
      </div>

      <IconHeader />
    </div>
  );
};

export default TextHeader;
