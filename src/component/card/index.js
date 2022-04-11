import React from 'react';
import './index.css';
import Title from '../song/title/index.js';
import Artists from '../song/artists/index.js';
import Img from '../song/image/index.js';
import Album from '../song/album/index.js';
import DetailsBtn from '../song/detailsBtn/index.js';

const Card = () => {
  return (
    //  <div className="card mb-3 mt-3 justify-content-center text-center">
    //       <div className="row g-0">
    //         <div className="col-md-4 mb-4 mt-4">
    //          <Img />
    //         </div>
    //         <div className="col-md-8">
    //           <div className="card-body">
    //            <Title />
    //             <Artists />
    //             <p className="garis-pembatas"></p>
    //             <Album />
    //            <DetailsBtn />
    //               <br></br>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    <div className="row mb-3 mt-3 justify-content-center text-center">
      <div className="col-md-5 mb-4 mt-4">
        <div className="card border-light">

          <Img />

          <div className="card-body">

            <Title />
            <Artists />
            <p className="garis-pembatas"></p>
            <Album />

            <DetailsBtn />
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
