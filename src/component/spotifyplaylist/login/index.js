import React, { Component } from "react";
import axios from "axios";
import { Albums } from "../home";
import '../home/index.css'
import './index.css'
import { SpotifyAPI } from "./spotifyapi";

const spotify = SpotifyAPI();

class Login extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      token: "",
      searchQuery: "",
      searchResult: [],
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    console.warn("didMount");
    const access_token = new URLSearchParams(window.location.hash).get(
      "#access_token"
    );
    this.setState(
      {
        token: access_token,
        loggedIn: true,
      },
      () => console.log(this.state.token)
    );
  }

  handleInput(event) {
    this.setState({
      searchQuery: event.target.value,
    });
  }

  onSearch(event) {
    axios
      .get("https://api.spotify.com/v1/search", {
        headers: {
          Authorization: `Bearer ${this.state.token}`,
        },
        params: {
          q: `${this.state.searchQuery}`,
          type: "track",
        },
      })
      .then((response) => {
        const data = response.data.tracks.items;
        console.log(data);
        this.setState({
          searchResult: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    event.preventDefault();
  }

  onSubmit(event) {
    const url = `${spotify.SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${spotify.CLIENT_ID}&redirect_uri=${spotify.REDIRECT_URL}&scope=${spotify.SCOPE}&response_type=token&show_dialog=true`;
    window.location = url;
    event.preventDefault();
  }

  onClick(event) {
    this.setState({
      loggedIn: false,
      token: "",
    });
    window.location.replace = "http://localhost:3000/";
  }

  render() {
    let isi;
    if (this.state.token != null && this.state.loggedIn === true) {
      isi = (
        <form onSubmit={this.onSearch} className="form-search text-center mt-3">

          <div class="input-group">
            <input type="text" class="form-control" placeholder="Search Song..." aria-label="Recipient's username with two button addons" onChange={this.handleInput}/>
            <button class="btn text-white" type="submit" >Search</button>
            <button class="btn text-white" onClick={this.onClick} type="submit" value="submit">Logout</button>
          </div>
          {this.state.searchResult.map((track) => (
            <Albums
              key={track.album.id}
              images={track.album.images[0].url}
              title={track.name}
              album={track.album.name}
              artist={track.artists[0].name}
              details={track.uri}
            />
          ))}
        </form>
      );
    } else
      isi = (
          <div>
            <form onSubmit={this.onSubmit} className="form-login text-center">
              <button className="btn btn-lg mt-3 text-white btn-login" id="info" type="submit" value="submit">
                Login with Spotify
              </button>
            </form>
          </div>
      );

    
    return (
      <div className="spotify-track">
        {isi}
      </div>
    );
  }
}

export default Login;