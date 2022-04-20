import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import store from '../../../store';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import SearchBar from '.';

const setup = () => render (
  <Provider store={store}>
    <SearchBar />
  </Provider>
);

describe('Search components should be render', () => {
  beforeEach(setup);
  afterEach(cleanup);

  it('Success render search components', () => {
    expect(screen.getByLabelText('search-input')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
  });

  it('Search input value should be same as user typing', () => {
    const searchInput  = screen.getByLabelText('search-input');
    userEvent.type(searchInput, 'hello');

    expect(searchInput.value).toBe('hello');
  });
});