import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

import userImg from '../assets/user.png';

export default function Navbar() {
  return (
    <div className="navbar">
      <img className="userImg" src={ userImg } alt="user img" />
      <h2>User name</h2>
      <Link to="/">
        <p>Create Campaign</p>
      </Link>

      <Link to="/best">
        <p>Best Campaign</p>
      </Link>
    </div>
  );
}
