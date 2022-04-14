import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {addTracksToPlaylist, createPlaylist} from '../utility/playlistSetting';
import './index.css';

export default function FormPlaylist({uris}) {
  const [playlist, setPlaylist] = useState({
    title: '',
    description: '',
  });

  const accessToken = useSelector((state) => state.auth.accessToken);
  const userId = useSelector((state) => state.auth.user.id);

  const handleChange = (e) => {
    const {name, value} = e.target;

    setPlaylist({...playlist, [name]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (playlist.title.length > 10) {
      try {
        const responsePlaylist = await createPlaylist(accessToken, userId, {
          name: playlist.title,
          description: playlist.description,
        });

        await addTracksToPlaylist(accessToken, responsePlaylist.id, uris);

        setPlaylist({
          title: '',
          description: '',
        });

        alert('Playlist created successfully!');
      } catch (e) {
        alert(e);
      }
    } else {
      alert('Title must be at least 10 characters long.');
    }
  };

  return (
    <div>
      <h2 className='fw-bolder text-white mt-2'>SPORTFY</h2>
        <br/>
        <div className="form-playlist mt-3 offset-5 text-center">
        <h3 className='create-playlist text-white'>Create Playlist</h3>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group mb-3 mt-3">
            <label className="title fs-5 text-white mb-1">Title</label>
            <br/>
            <input
              type="text"
              className="form-control"
              placeholder="Playlist title..."
              name="title"
              id="title"
              value={playlist.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label className="desc fs-5 text-white mb-1">Description</label>
            <br/>
            <textarea
              id="desc"
              className="form-control"
              name="description"
              placeholder="Playlist description..."
              value={playlist.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button className="btn btn-submit btn-light" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
