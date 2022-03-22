import './App.css';
import picture from './mcr.jpg'
import song from './Disenchanted.mp3'
import data from './single-sample.js'
// import { useEffect } from 'react';


// const music = document.getElementById("info");
// music.addEventListener("click", getAsync);

// async function getAsync() {
//   fetch({data})
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => alert(error));
// };

// const getPlaylist = async () => {
//   try {
//     const response = await fetch( 
//       {data} );
//     const data = await response.json();
//     console.log(data);
//     return data;
//     } catch (error) {
//       alert(error);
//     }

// };

console.log({data})

function App() {
  // useEffect(() => {
  //   getPlaylist();
  // }, []);
  return (
    <div className="App">
      <section className="jumbotron">
        <div className="container pt-3">
        <div className="row">
          <div className="col-md-6 pb-2">
            <p className="start">My Playlist</p>
              <h1>Music Player<br></br><span className="highlight">For you who loves music</span></h1>
          </div>

          <div className="col-md-6 pb-2" id="baloon">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-balloon-heart" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721L8 2.42Zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063.045.041.089.084.132.129.043-.045.087-.088.132-.129 3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398Z"/>
              </svg>
          </div>
        </div>
        <hr></hr>

        {/* <div className="row mb-3 mt-3 justify-content-center text-center">
          <div className="col-md-4 mb-4 mt-4">
            <div className="card border-light">
                <img src={picture} width="50" className="card-img-top" alt="Front-end"/>
              <div className="card-body">
                <h3 className="card-title text-dark"><i className="bi bi-music-note"></i>Disenchanted</h3>
                <p className="card-text text-muted" id="song-title">My Chemical Romance</p>
                <p className="garis-pembatas"></p>
                <p className="card-text text-muted" id="song-album">Album : The Black Parade</p>
              
                <button className="btn btn-dark btn-lg mb-3" role="button" type="button" href="#" id="info">
                  Select
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-info-lg" viewBox="0 0 16 16" id="svg">
                    <path d="m9.708 6.075-3.024.379-.108.502.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325-.363 0-.494-.255-.402-.704l1.323-6.208Zm.091-2.755a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0Z"/>
                  </svg>
                  </button>
                  <br></br>
              </div>
            </div>
          </div>
        </div> */}

        <div className="card mb-3 mt-3 justify-content-center text-center">
          <div className="row g-0">
            <div className="col-md-4 mb-4 mt-4">
            <img src={picture} width="50" className="card-img-top rounded-start" alt="Front-end"/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
              <h3 className="card-title text-dark"><i className="bi bi-music-note"></i>Disenchanted</h3>
                <p className="card-text text-muted" id="song-title">My Chemical Romance</p>
                <p className="garis-pembatas"></p>
                <p className="card-text text-muted" id="song-album">Album : The Black Parade</p>

                <button className="btn btn-dark btn-lg mb-3" type="button" href="#" id="info">
                  Select 
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-info-lg" viewBox="0 0 16 16" id="svg">
                    <path d="m9.708 6.075-3.024.379-.108.502.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325-.363 0-.494-.255-.402-.704l1.323-6.208Zm.091-2.755a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0Z"/>
                  </svg>
                  </button>
                  <br></br>
              </div>
            </div>
          </div>
        </div>
        

        <audio controls  className="col-md-8 col-sm-8 col-lg-8 align-items-center offset-md-3 offset-lg-2 offset-sm-2">
            <source src={song} type="audio/mpeg"/>
        </audio>
        <div className="rain">
        <div className="drop"></div>
        <div className="waves">
        <div></div>
        <div></div>
      </div>
      <div className="splash"></div>
        <div className="particles">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      

        </div>
      </section>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fillOpacity="1" d="M0,288L6.3,288C12.6,288,25,288,38,266.7C50.5,245,63,203,76,160C88.4,117,101,75,114,58.7C126.3,43,139,53,152,64C164.2,75,177,85,189,128C202.1,171,215,245,227,282.7C240,320,253,320,265,277.3C277.9,235,291,149,303,101.3C315.8,53,328,43,341,58.7C353.7,75,366,117,379,112C391.6,107,404,53,417,32C429.5,11,442,21,455,64C467.4,107,480,181,493,202.7C505.3,224,518,192,531,170.7C543.2,149,556,139,568,138.7C581.1,139,594,149,606,149.3C618.9,149,632,139,644,112C656.8,85,669,43,682,53.3C694.7,64,707,128,720,154.7C732.6,181,745,171,758,181.3C770.5,192,783,224,796,229.3C808.4,235,821,213,834,208C846.3,203,859,213,872,186.7C884.2,160,897,96,909,64C922.1,32,935,32,947,48C960,64,973,96,985,133.3C997.9,171,1011,213,1023,245.3C1035.8,277,1048,299,1061,272C1073.7,245,1086,171,1099,128C1111.6,85,1124,75,1137,58.7C1149.5,43,1162,21,1175,16C1187.4,11,1200,21,1213,26.7C1225.3,32,1238,32,1251,64C1263.2,96,1276,160,1288,192C1301.1,224,1314,224,1326,224C1338.9,224,1352,224,1364,202.7C1376.8,181,1389,139,1402,128C1414.7,117,1427,139,1434,149.3L1440,160L1440,0L1433.7,0C1427.4,0,1415,0,1402,0C1389.5,0,1377,0,1364,0C1351.6,0,1339,0,1326,0C1313.7,0,1301,0,1288,0C1275.8,0,1263,0,1251,0C1237.9,0,1225,0,1213,0C1200,0,1187,0,1175,0C1162.1,0,1149,0,1137,0C1124.2,0,1112,0,1099,0C1086.3,0,1074,0,1061,0C1048.4,0,1036,0,1023,0C1010.5,0,998,0,985,0C972.6,0,960,0,947,0C934.7,0,922,0,909,0C896.8,0,884,0,872,0C858.9,0,846,0,834,0C821.1,0,808,0,796,0C783.2,0,771,0,758,0C745.3,0,733,0,720,0C707.4,0,695,0,682,0C669.5,0,657,0,644,0C631.6,0,619,0,606,0C593.7,0,581,0,568,0C555.8,0,543,0,531,0C517.9,0,505,0,493,0C480,0,467,0,455,0C442.1,0,429,0,417,0C404.2,0,392,0,379,0C366.3,0,354,0,341,0C328.4,0,316,0,303,0C290.5,0,278,0,265,0C252.6,0,240,0,227,0C214.7,0,202,0,189,0C176.8,0,164,0,152,0C138.9,0,126,0,114,0C101.1,0,88,0,76,0C63.2,0,51,0,38,0C25.3,0,13,0,6,0L0,0Z"></path></svg>
        

    </div>
  );
}

export default App;
