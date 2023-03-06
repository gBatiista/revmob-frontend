import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="header">
        <img className="logo" src={ logo } alt="user img" />
        <h2>User name</h2>
      </div>
      <Link to="/">
        <p>Create Campaign</p>
      </Link>

      <Link to="/">
        <p>Edit Campaign</p>
      </Link>

      <Link to="/">
        <p>Delete Campaign</p>
      </Link>
    </div>
  );
}
