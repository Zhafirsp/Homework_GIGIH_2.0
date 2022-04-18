import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { searchTrack } from '../utility/playlistSetting';
import { TRootState } from 'store';
import './index.css';

interface IProps {
  onSuccess: (tracks: any[]) => void;
}

const SearchBar: React.FC<IProps> = ({ onSuccess }) => {
  const [text, setText] = useState<string>('');
  const accessToken: string = useSelector((state: TRootState) => state.auth.accessToken);

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
            onChange={handleInput}
            required
            value={text}
          />
          <button className="btn btn-light btn-search mb-3">Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;