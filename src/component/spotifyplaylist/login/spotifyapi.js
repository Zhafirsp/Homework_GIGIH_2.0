import React from "react";

const SpotifyAPI = () => {
  return {
    BASE_URL: "https://api.spotify.com/v1",
    CLIENT_ID: process.env.REACT_APP_CLIENT_ID,
    REDIRECT_URL: process.env.REACT_APP_REDIRECT_URL,
    SCOPE: "playlist-modify-private",
    SPOTIFY_AUTHORIZE_ENDPOINT: process.env.REACT_APP_AUTHORIZE_URL,
  }
}

export {SpotifyAPI};