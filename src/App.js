import {useSelector} from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import Jumbotron from './component/jumbotron';
// import Home from './component/spotifyplaylist/home';
import CreatePlaylist from './component/spotifyplaylist/playlist/createPlaylist';
import React from 'react';

function App() {
  const authorized = useSelector((state) => state.auth.authorized);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/create-playlist">
            {authorized ? <CreatePlaylist /> : <Redirect to="/" />}
          </Route>
          <Route path="/">
            <Jumbotron/>
          </Route>
        </Switch>
      </Router>
      {/* <Home /> */}
    </div>

  );
}

export default App;
