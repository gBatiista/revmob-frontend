import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

export default function Header() {
  return (
    <div className="header-container">
      <Link to="/">
        <p>I&apos;m Advertiser</p>
      </Link>

      <Link to="/campaigns">
        <p>I&apos;m Publisher</p>
      </Link>
    </div>
  );
}
