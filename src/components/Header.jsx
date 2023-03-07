import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

export default function Header(props) {
  const { on } = props;

  return (
    <div className="header-container">
      <Link className={ (on === 'advertiser') ? 'on' : undefined } to="/">
        <p>I&apos;m Advertiser</p>
      </Link>

      <Link className={ (on === 'publisher') ? 'on' : undefined } to="/campaigns">
        <p>I&apos;m Publisher</p>
      </Link>
    </div>
  );
}

Header.propTypes = {
  on: PropTypes.string.isRequired,
};
