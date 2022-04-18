const spotifyApi: ApiSpotify = {
  SPOTIFY_BASE_URL: 'https://api.spotify.com/v1',
  SPOTIFY_SCOPE: 'playlist-modify-private',
  RESPONSE_TYPE: 'token',
};

interface ApiSpotify {
  SPOTIFY_BASE_URL: string;
  SPOTIFY_SCOPE: string;
  RESPONSE_TYPE: string;
}

export default spotifyApi;
