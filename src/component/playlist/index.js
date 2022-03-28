import data from "../song/track"
import './index.css'

const Albums = ({ album, images, artist ,title, details }) => (
  <div className="playlist">
    <div className="row mb-3 mt-3 justify-content-center text-center">
      <div className="col-md-10 mb-4 mt-4">
        <div className="card border-light">
          <div className="card-body">
            <img src={images} alt={album} width="300" height="300" className="card-img-top"/>
            <h3 className="card-title text-dark"><i className="bi bi-music-note"></i>{title}</h3>
            <p className="card-text text-muted" id="song-title">{artist}</p>
            <p className="garis-pembatas col-md-4 offset-md-3"></p>
            <p className="card-text text-muted" id="song-album">{album}</p>
            <a href={details}>
                  <button className="btn btn-dark btn-lg mb-3" type="button" id="info">
                    Select 
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16" id="svg">
                      <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg>
                  </button>
                </a>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// function Playlist() { 
// return data.map ((track) => {
//   const { id, album, name: title, artists } = track;
//   return (
//           <Albums
//             key={id}
//             images={album.images[0].url}
//             title={title}
//             album={album.name}
//             artist={artists}
//             uri={album.uri}
//             />
//           );
//         });

        
//       }

const Playlist = () => {
  return (
    <div className="Playlist">
      {data.map((track) => {
        return (
          <Albums
          key={track.album.id}
          images={track.album.images[0].url}
          title={track.name}
          album={track.album.name}
          artist={track.artists[0].name}
          details={track.uri}
          />
        )
      })}
    </div>
  )
}

export default Playlist;