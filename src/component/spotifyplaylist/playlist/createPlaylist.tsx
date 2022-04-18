import React, { useEffect, useState } from 'react';
import Track from '../track/track';
import SearchBar from '../search';
import Logout from '../logout';
import FormPlaylist from './formPlaylist';

const CreatePlaylist: React.FC = () => {
  const [tracks, setTracks] = useState<any[]>([]);
  const [selectedTrackURI, setSelectedTrackURI] = useState<string[]>([]);
  const [selectedTracks, setSelectedTracks] = useState<any[]>([]);
  const [search, setSearch] = useState<boolean>(false);

  useEffect(() => {
    if (!search) {
      const selectedTracks: any[] = filterSelectedTracks();

      setTracks(selectedTracks);
    }
  }, [selectedTrackURI]);

  const filterSelectedTracks: () => any[] = () =>
    tracks.filter((track) => selectedTrackURI.includes(track.uri));

  const handleSuccessSearch: (searchTracks: any[]) => void = (searchTracks) => {
    setSearch(true);

    const selectedSearchTracks = searchTracks.filter(
      (data: any) => selectedTrackURI.includes(data.uri),
    );

    setTracks([...new Set([...selectedSearchTracks, ...searchTracks])]);
  };

  const toggleSelect: (track: any) => void = (track) => {
    const { uri } = track;

    if (selectedTrackURI.includes(uri)) {
      setSelectedTrackURI(selectedTrackURI.filter((item: any) => item !== uri));
      setSelectedTracks(selectedTracks.filter((item: any) => item.uri !== uri));
    } else {
      setSelectedTrackURI([...selectedTrackURI, uri]);
      setSelectedTracks([...selectedTracks, track]);
    }
  };

  return (
    <div className='playlist-page'>
      <Logout />
      <FormPlaylist
        uris={selectedTrackURI}
      />
      <hr className='pembatas-form' />
      <SearchBar
        onSuccess={(tracks) => handleSuccessSearch(tracks)}
      />
      {tracks.length === 0 && <p className="not-found text-white text-center">Song Not Found</p>}

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
};

export default CreatePlaylist;