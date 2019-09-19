import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar   navbar-light bg-light">
          <Link className="navbar-brand" to='/'>Home</Link>
          
          <GoogleAuth/>
        </nav>

      </div>
    );
  }
}

export default Header;