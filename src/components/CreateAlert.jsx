import React from 'react';
import PropTypes from 'prop-types';

import done from '../assets/accept.png';
import negative from '../assets/negative.png';

import '../styles/CreateAlert.css';

export default function CreateAlert({
  closeAlert,
  type,
  id = '',
  setId = () => {},
}) {
  return (
    <div className="alert-background">
      <div className="alert-container">
        <div className="alert">

          {
            type === 'success' && (
              <>
                <img src={ done } alt="Done" />
                <p>Campaign created successfully</p>
                <p className="alert-campaign-id">{ `Save this ID: ${id}` }</p>
              </>
            )
          }

          {
            type === 'delete' && (
              <>
                <img src={ done } alt="Done" />
                <p>Campaign deleted successfully</p>
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

          <button
            onClick={ () => {
              closeAlert();
              setId('');
            } }
          >
            Done

          </button>
        </div>
      </div>
    </div>
  );
}

CreateAlert.propTypes = {
  closeAlert: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
  setId: PropTypes.func,
};
