import React from 'react';
import './App.css';
import './style.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import HomePage from './pages/home';
import ExoplanetsPage from './pages/exoplanets';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/exoplanets">Exoplanets</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/exoplanets">
            <ExoplanetsPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>);
}

export default App;
