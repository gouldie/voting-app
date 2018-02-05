import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Link to="/" className="home-link">fcc-voting</Link>

      <button className="pure-button login">
        Log In
      </button>

      <button className="pure-button">
        Register
      </button>
   

    <hr />
  </header>
);

export default Header;
