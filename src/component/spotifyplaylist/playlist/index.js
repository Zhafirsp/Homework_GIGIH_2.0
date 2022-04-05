import React, { useState } from "react";
import { useSelector } from "react-redux";
import { addTracksToPlaylist, createPlaylist } from "./playlistSetting";

export default function FormPlaylist({ uris }) {
  const [playlist, setPlaylist] = useState({
    title: "",
    description: "",
  });
  
  const accessToken = useSelector((state) => state.auth.accessToken);
  const userId = useSelector((state) => state.auth.user.id);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPlaylist({ ...playlist, [name]: value });
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
          title: "",
          description: "",
        });

        alert("Playlist created successfully!");
      } catch (e) {
        alert(e);
      }
    } else {
      alert("Title must be at least 10 characters long.");
    }
  };

  return (
    <div className="form-playlist">
      <h3>Create Playlist</h3>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label className="title">Title</label>
          <br/>
          <input
            type="text"
            name="title"
            id="title"
            value={playlist.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label className="desc">Description</label>
          <br/>
          <textarea
            id="desc"
            name="description"
            value={playlist.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button className="btn btn-dark" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}