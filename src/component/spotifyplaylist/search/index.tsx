import React, { useState } from 'react';
import { searchTrack } from '../utility/playlistSetting';
import { RootState, useAppSelector } from '../../../store';
import { Track as ITrack } from '../types/spotifyType';
import './index.css';

interface IProps {
  onSuccess: (tracks: ITrack[]) => void;
}

const SearchBar: React.FC<IProps> = ({ onSuccess }) => {
  const [text, setText] = useState<string>('');
  const accessToken: string = useAppSelector((state: RootState) => state.auth.accessToken);

  const handleInput = (e: React.ChangeEvent) => {
    const target = e.target as HTMLTextAreaElement;
    setText(target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await searchTrack(text, accessToken);
      const tracks = response.tracks.items;
      onSuccess(tracks);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div className="search mt-3">
      <form className="form-search col-md-8" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="query"
            placeholder="Search..."
            aria-label="search-input"
            onChange={handleInput}
            required
            value={text}
          />
          <button aria-label="search-button" className="btn btn-light btn-search mb-3">Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;