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

    if (text === '') {
      alert('Please type a word');
    } else {
      try {
        const response = await searchTrack(text, accessToken);
        const tracks = response.tracks.items;
        onSuccess(tracks);
      } catch (e) {
        alert(e);
      }
    }
  };

  return (
    <div className="search mt-3 me-2">
      <form className="form-search" onSubmit={handleSubmit}>
        <div className="form-group row g-3">
          <div className='col-md-6'>
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
          </div>
          <div className='col-md-2'>
            <button aria-label="search-button" className="btn btn-outline-success btn-search mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-search-heart-fill" viewBox="0 0 16 16">
                <path d="M6.5 13a6.474 6.474 0 0 0 3.845-1.258h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.008 1.008 0 0 0-.115-.1A6.471 6.471 0 0 0 13 6.5 6.502 6.502 0 0 0 6.5 0a6.5 6.5 0 1 0 0 13Zm0-8.518c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z" />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;