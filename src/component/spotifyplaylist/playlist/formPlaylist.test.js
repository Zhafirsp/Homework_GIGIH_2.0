import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import store from '../../../store';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import FormPlaylist from './formPlaylist';

const setup = () => render (
  <Provider store={store}>
    <FormPlaylist />
  </Provider>
);

describe('Form create playlist should be render', () => {
  beforeEach(setup);
  afterEach(cleanup);

  it('Success render create playlist form', () => {
    expect(screen.getByText(/create playlist/i)).toBeInTheDocument();
    expect(screen.getByLabelText('input-title')).toBeInTheDocument();
    expect(screen.getByLabelText('input-description')).toBeInTheDocument();
    expect(screen.getByText('Create')).toBeInTheDocument();
  });

  it('Type in form create playlist', () => {
    const titleInput = screen.getByLabelText('input-title');
    const descriptionInput = screen.getByLabelText('input-description');

    userEvent.type(titleInput, 'Title Playlist');
    userEvent.type(descriptionInput, 'Playlist Description');

    expect(titleInput).toHaveValue('Title Playlist');
    expect(descriptionInput).toHaveValue('Playlist Description');
  });
});