import React from "react";
import Data from "../single-sample.js";

const DetailsBtn = () => {
  return (
    <a href={Data.uri}>
      <button className="btn btn-dark btn-lg mb-3" type="button" id="info">
        Select 
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16" id="svg">
          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
        </svg>
      </button>
    </a>
  )
}

export default DetailsBtn;
