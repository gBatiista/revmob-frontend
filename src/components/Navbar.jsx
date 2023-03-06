import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/Navbar.css';

import logo from '../assets/logo.png';

export default function Navbar(props) {
  const { location } = props;

  return (
    <div className="navbar">
      <div className="header">
        <img className="logo" src={ logo } alt="user img" />
        <h2>User name</h2>
      </div>
      {
        location === 'advertiser' && (
          <>
            <Link to="/">
              <p>Create Campaign</p>
            </Link>

            <Link to="/">
              <p>Edit Campaign</p>
            </Link>

            <Link to="/">
              <p>Delete Campaign</p>
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
