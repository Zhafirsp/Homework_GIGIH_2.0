import React from 'react';
import Song from '../../assets/song/Bohemian Rhapsody.mp3';
import TextHeader from '../header/textHeader';
import Rain from '../rain';
import Card from '../card';
// import {Playlist} from '../spotifyplaylist/track/index';
import Login from '../spotifyplaylist/login';

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
          <hr></hr>
          <Card />

          <audio controls className="col-md-8 col-sm-8 col-lg-8 align-items-center offset-md-2 offset-lg-2 offset-sm-2">
            <source src={Song} type="audio/mpeg"/>
          </audio>

          <Rain />
          <Login />
        </div>
      </section>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fillOpacity="1" d="M0,288L6.3,288C12.6,288,25,288,38,266.7C50.5,245,63,203,76,160C88.4,117,101,75,114,58.7C126.3,43,139,53,152,64C164.2,75,177,85,189,128C202.1,171,215,245,227,282.7C240,320,253,320,265,277.3C277.9,235,291,149,303,101.3C315.8,53,328,43,341,58.7C353.7,75,366,117,379,112C391.6,107,404,53,417,32C429.5,11,442,21,455,64C467.4,107,480,181,493,202.7C505.3,224,518,192,531,170.7C543.2,149,556,139,568,138.7C581.1,139,594,149,606,149.3C618.9,149,632,139,644,112C656.8,85,669,43,682,53.3C694.7,64,707,128,720,154.7C732.6,181,745,171,758,181.3C770.5,192,783,224,796,229.3C808.4,235,821,213,834,208C846.3,203,859,213,872,186.7C884.2,160,897,96,909,64C922.1,32,935,32,947,48C960,64,973,96,985,133.3C997.9,171,1011,213,1023,245.3C1035.8,277,1048,299,1061,272C1073.7,245,1086,171,1099,128C1111.6,85,1124,75,1137,58.7C1149.5,43,1162,21,1175,16C1187.4,11,1200,21,1213,26.7C1225.3,32,1238,32,1251,64C1263.2,96,1276,160,1288,192C1301.1,224,1314,224,1326,224C1338.9,224,1352,224,1364,202.7C1376.8,181,1389,139,1402,128C1414.7,117,1427,139,1434,149.3L1440,160L1440,0L1433.7,0C1427.4,0,1415,0,1402,0C1389.5,0,1377,0,1364,0C1351.6,0,1339,0,1326,0C1313.7,0,1301,0,1288,0C1275.8,0,1263,0,1251,0C1237.9,0,1225,0,1213,0C1200,0,1187,0,1175,0C1162.1,0,1149,0,1137,0C1124.2,0,1112,0,1099,0C1086.3,0,1074,0,1061,0C1048.4,0,1036,0,1023,0C1010.5,0,998,0,985,0C972.6,0,960,0,947,0C934.7,0,922,0,909,0C896.8,0,884,0,872,0C858.9,0,846,0,834,0C821.1,0,808,0,796,0C783.2,0,771,0,758,0C745.3,0,733,0,720,0C707.4,0,695,0,682,0C669.5,0,657,0,644,0C631.6,0,619,0,606,0C593.7,0,581,0,568,0C555.8,0,543,0,531,0C517.9,0,505,0,493,0C480,0,467,0,455,0C442.1,0,429,0,417,0C404.2,0,392,0,379,0C366.3,0,354,0,341,0C328.4,0,316,0,303,0C290.5,0,278,0,265,0C252.6,0,240,0,227,0C214.7,0,202,0,189,0C176.8,0,164,0,152,0C138.9,0,126,0,114,0C101.1,0,88,0,76,0C63.2,0,51,0,38,0C25.3,0,13,0,6,0L0,0Z"></path></svg>

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
