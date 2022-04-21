import React, { useEffect, useState } from 'react';
import Track from '../track/track';
import SearchBar from '../search';
import Logout from '../logout';
import FormPlaylist from './formPlaylist';
import { Track as ITrack } from '../types/spotifyType';

const CreatePlaylist: React.FC = () => {
  const [tracks, setTracks] = useState<ITrack[]>([]);
  const [selectedTrackURI, setSelectedTrackURI] = useState<string[]>([]);
  const [selectedTracks, setSelectedTracks] = useState<ITrack[]>([]);
  const [search, setSearch] = useState<boolean>(false);

  useEffect(() => {
    if (!search) {
      const selectedTracks: ITrack[] = filterSelectedTracks();

      setTracks(selectedTracks);
    }
  }, [selectedTrackURI]);

  const filterSelectedTracks: () => any[] = () =>
    tracks.filter((track) => selectedTrackURI.includes(track.uri));

  const handleSuccessSearch: (searchTracks: ITrack[]) => void = (searchTracks) => {
    setSearch(true);

    const selectedSearchTracks = searchTracks.filter(
      (data: any) => selectedTrackURI.includes(data.uri),
    );

    setTracks([...new Set([...selectedSearchTracks, ...searchTracks])]);
  };

  const toggleSelect: (track: ITrack) => void = (track) => {
    const { uri } = track;

    if (selectedTrackURI.includes(uri)) {
      setSelectedTrackURI(selectedTrackURI.filter((item: string) => item !== uri));
      setSelectedTracks(selectedTracks.filter((item: ITrack) => item.uri !== uri));
    } else {
      setSelectedTrackURI([...selectedTrackURI, uri]);
      setSelectedTracks([...selectedTracks, track]);
    }
  };

  return (
    <div className='playlist-page'>
      <div className='form-page bg-secondary bg-opacity-10'>
        <Logout />
        <FormPlaylist
          uris={selectedTrackURI}
        />
        <hr className='pembatas-form' />
      </div>
      <div className='search-page'>
        <SearchBar
          onSuccess={(tracks) => handleSuccessSearch(tracks)}
        />
        {tracks.length === 0 && <p className="not-found text-center text-white">Song Not Found</p>}

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
    </div>
  );
};

export default CreatePlaylist;