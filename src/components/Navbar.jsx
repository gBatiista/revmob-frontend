import { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/Navbar.css';

import logo from '../assets/logo.png';
import AppContext from '../context/AppContext';

export default function Navbar(props) {
  const { user } = useContext(AppContext);
  const { location } = props;

  return (
    <div className="navbar">
      <div className="header">
        <img className="logo" src={ logo } alt="user img" />
        <h2>{ user }</h2>
      </div>
      {
        location === 'advertiser' && (
          <Link to="/">
            <p>Create Campaign</p>
          </Link>
        )
      }

      {
        location === 'publisher' && (
          <>
            <Link to="/campaigns">
              <p>Best Campaign</p>
            </Link>

            <Link to="/campaigns/all">
              <p>All Campaigns</p>
            </Link>

          </>
        )
      }
    </div>
  );
}

Navbar.propTypes = {
  location: PropTypes.string.isRequired,
};
