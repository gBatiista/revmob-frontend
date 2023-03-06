import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

import userImg from '../assets/user.png';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="header">
        <img className="userImg" src={ userImg } alt="user img" />
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

      <Link to="/best">
        <p>Best Campaign</p>
      </Link>
    </div>
  );
}
