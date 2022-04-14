import React from 'react';
import Song from '../../assets/song/Bohemian Rhapsody.mp3';
import TextHeader from '../header/textHeader';
import Rain from '../rain';
import Card from '../card';
// import {Playlist} from '../spotifyplaylist/track/index';
import Login from '../spotifyplaylist/login';
import '../card/card.css';

const Jumbotron = () => {
  return (
    <>
      <section className="jumbotron">
        <div className="container pt-3">

          <TextHeader
            header= {{
              title: 'My Playlist',
              type: 'Song of the Year',
              text: 'Music is Magic',
            }}
          />
          <hr/>
          <Card />

          <audio controls className="col-md-8 col-sm-8 col-lg-8 align-items-center offset-md-2 offset-lg-2 offset-sm-2">
            <source src={Song} type="audio/mpeg"/>
          </audio>

          <Rain />
          <Login />
        </div>
      </section>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fillOpacity="1" d="M0,96L8,96C16,96,32,96,48,106.7C64,117,80,139,96,170.7C112,203,128,245,144,245.3C160,245,176,203,192,202.7C208,203,224,245,240,266.7C256,288,272,288,288,277.3C304,267,320,245,336,240C352,235,368,245,384,240C400,235,416,213,432,181.3C448,149,464,107,480,101.3C496,96,512,128,528,154.7C544,181,560,203,576,218.7C592,235,608,245,624,213.3C640,181,656,107,672,101.3C688,96,704,160,720,160C736,160,752,96,768,80C784,64,800,96,816,138.7C832,181,848,235,864,266.7C880,299,896,309,912,272C928,235,944,149,960,149.3C976,149,992,235,1008,261.3C1024,288,1040,256,1056,213.3C1072,171,1088,117,1104,90.7C1120,64,1136,64,1152,74.7C1168,85,1184,107,1200,106.7C1216,107,1232,85,1248,101.3C1264,117,1280,171,1296,170.7C1312,171,1328,117,1344,80C1360,43,1376,21,1392,37.3C1408,53,1424,107,1432,133.3L1440,160L1440,320L1432,320C1424,320,1408,320,1392,320C1376,320,1360,320,1344,320C1328,320,1312,320,1296,320C1280,320,1264,320,1248,320C1232,320,1216,320,1200,320C1184,320,1168,320,1152,320C1136,320,1120,320,1104,320C1088,320,1072,320,1056,320C1040,320,1024,320,1008,320C992,320,976,320,960,320C944,320,928,320,912,320C896,320,880,320,864,320C848,320,832,320,816,320C800,320,784,320,768,320C752,320,736,320,720,320C704,320,688,320,672,320C656,320,640,320,624,320C608,320,592,320,576,320C560,320,544,320,528,320C512,320,496,320,480,320C464,320,448,320,432,320C416,320,400,320,384,320C368,320,352,320,336,320C320,320,304,320,288,320C272,320,256,320,240,320C224,320,208,320,192,320C176,320,160,320,144,320C128,320,112,320,96,320C80,320,64,320,48,320C32,320,16,320,8,320L0,320Z"></path></svg>

      {/* <section className='jumbotron-2'>

        <div className="container pt-3">
          <TextHeader
            header= {{
              title: 'Everybody Playlist',
              type: 'Music Player',
              text: 'For you who loves music',
            }}
          />
          <hr></hr>
          <Playlist />
        </div>
      </section> */}
    </>
  );
};

export default Jumbotron;
