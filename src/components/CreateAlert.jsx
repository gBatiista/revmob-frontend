import React from 'react';
import PropTypes from 'prop-types';

import done from '../assets/accept.png';
import negative from '../assets/negative.png';

import '../styles/CreateAlert.css';

export default function CreateAlert(props) {
  const { closeAlert, type } = props;

  return (
    <div className="alert-background">
      <div className="alert-container">
        <div className="alert">

          {
            type === 'success' && (
              <>
                <img src={ done } alt="Done" />
                <p>Advertise created successfully</p>
              </>
            )
          }

          {
            type === 'info' && (
              <>
                <img src={ negative } alt="Done" />
                <p>Please fill in at least title and bid</p>
              </>
            )
          }

          {
            type === 'error' && (
              (
                <>
                  <img src={ negative } alt="Error" />
                  <p>Something went wrong</p>
                </>
              )
            )
          }

          <button onClick={ closeAlert }>Done</button>
        </div>
      </div>
    </div>
  );
}

CreateAlert.propTypes = {
  closeAlert: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};
