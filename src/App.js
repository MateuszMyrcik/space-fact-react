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
import SearchWidget from './widgets/search';
import NavItem from './resources/features/atoms/nav-item';

function App() {
  const additionalClasses = ['additional-item-2', 'additional-item-3'];
  const dropdownOptions = [{ url: 'google2.com', itemName: 'Google2'},{url: 'google3.com', itemName: 'Google3'}]

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
            {/* <NavItem label="Google" dropdownOptions={dropdownOptions} classes={additionalClasses} url="google.com"></NavItem>
            <NavItem label="FB" url="yt.com"></NavItem>
            <NavItem label="Yt" url="yt.com"></NavItem> */}
          </ul>
          <SearchWidget />
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
