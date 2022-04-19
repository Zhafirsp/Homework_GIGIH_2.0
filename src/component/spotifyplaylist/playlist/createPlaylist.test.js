import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import store from "store";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import CreatePlaylist from "./createPlaylist";
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import spotifyApi from "../utility/spotifyApi";

export const server = setupServer(
  rest.get(`${spotifyApi.SPOTIFY_BASE_URL}/search`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        tracks: {
          items: [
            {
              id: '1',
              album: {
                images: [
                  {
                    url: 'Images URL',
                  },
                ],
              },
              name: 'Track Title',
              artists: [
                {
                  name: 'Track Artist',
                },
              ],
              external_urls: {
                spotify: 'Spotify URL',
              },
              uri: 'Track Uri',
            },
          ],
        },
      })
    );
  })
);

const setup = () =>
  render(
    <Provider store={store}>
      <CreatePlaylist />
    </Provider>
  );

describe('Create playlist should be render', () => {
    beforeEach(setup);
    beforeAll(() => server.listen());
    afterEach(() => {
      server.resetHandlers();
      cleanup();
    });
    afterAll(() => server.close());
  
    it('Should render tracks after search', async () => {
      const buttonSearch = screen.getByLabelText('search-button');
  
      userEvent.click(buttonSearch);
  
      await screen.findByText('Track Title');
      expect(screen.getByText('Track Title')).toBeInTheDocument();
    });
  
    it('Should render track items after search', async () => {
      const searchInput = screen.getByLabelText('search-input');
      const buttonSearch = screen.getByLabelText('search-button');
  
      userEvent.type(searchInput, 'eminem');
      userEvent.click(buttonSearch);
  
      await screen.findByText(/track title/i);
  
      const imageTrack = screen.getByLabelText('image-track');
      const titleTrack = screen.getByLabelText('title-track');
      const artistTrack = screen.getByLabelText('artist-track');
      const albumTrack = screen.getByLabelText('album-track');
      const btnTrack = screen.getByLabelText('button-track');
  
      expect(imageTrack).toBeInTheDocument();
      expect(titleTrack).toBeInTheDocument();
      expect(artistTrack).toBeInTheDocument();
      expect(albumTrack).toBeInTheDocument();
      expect(btnTrack).toBeInTheDocument();
    });
  });