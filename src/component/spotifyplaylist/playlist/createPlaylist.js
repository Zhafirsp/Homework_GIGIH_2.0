import React, {useEffect, useState} from 'react';
import Track from '../track/track';
import SearchBar from '../search';
import Logout from '../logout';
import FormPlaylist from './formPlaylist';

export default function CreatePlaylist() {
  const [tracks, setTracks] = useState([]);
  const [selectedTrackURI, setSelectedTrackURI] = useState([]);
  const [selectedTracks, setSelectedTracks] = useState([]);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    if (!search) {
      const selectedTracks = filterSelectedTracks();

      setTracks(selectedTracks);
    }
  }, [selectedTrackURI]);

  const filterSelectedTracks = () =>
    tracks.filter((track) => selectedTrackURI.includes(track.uri));

  const handleSuccessSearch = (searchTracks) => {
    setSearch(true);

    const selectedSearchTracks = searchTracks.filter(
        (data) => selectedTrackURI.includes(data.uri),
    );

    setTracks([...new Set([...selectedSearchTracks, ...searchTracks])]);
  };

  const toggleSelect = (track) => {
    const {uri} = track;

    if (selectedTrackURI.includes(uri)) {
      setSelectedTrackURI(selectedTrackURI.filter((item) => item !== uri));
      setSelectedTracks(selectedTrackURI.filter((item) => item.uri !== uri));
    } else {
      setSelectedTrackURI([...selectedTrackURI, uri]);
      setSelectedTracks([...selectedTracks, track]);
    }
  };

  return (
    <div>
      <FormPlaylist
        uris={selectedTrackURI}
      />
      <Logout />
      <hr />
      <SearchBar
        onSuccess={(tracks) => handleSuccessSearch(tracks)}
      />
      {tracks.length === 0 && <p className="not-found text-center">Song Not Found</p>}

      <div className="track-list">
        {tracks.map((track) => (
          <Track
            key={track.id}
            url={track.album.images[0].url}
            title={track.name}
            artist={track.artists[0].name}
            album={track.album.name}
            toggleSelect={() => toggleSelect(track)}
            select={selectedTrackURI.includes(track.uri)}
          />
        ))}
      </div>
    </div>
  );
}
