import React, { useState } from 'react';
import axios from 'axios';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import CreateAlert from '../components/CreateAlert';

import '../styles/DeleteCampaign.css';

export default function DeleteCampaign() {
  const [id, setId] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [requestError, setRequestError] = useState(false);

  const deleteAd = async () => {
    try {
      await axios.delete('https://revmob-be.fly.dev/', { data: { id } });
    } catch (error) {
      console.error(error);
      setRequestError(true);
    }

    setShowAlert(true);
    setId('');
  };

  return (
    <div className="nav-container">
      <Navbar location="advertiser" />
      <div>
        <Header on="advertiser" />
        <div className="container">
          {
            showAlert && <CreateAlert
              type={ !requestError ? 'delete' : 'error' }
              closeAlert={ () => {
                setShowAlert(false);
                setRequestError(false);
              } }
            />
          }
          <div className="delete-container">
            <h2>Campaign</h2>
            <label htmlFor="ad-id">Enter the campaign ID</label>
            <input
              type="text"
              value={ id }
              onChange={ ({ target }) => setId(target.value) }
              placeholder="Campaign ID:"
              id="ad-id"
            />
            <button onClick={ deleteAd }>Delete Campaign</button>
          </div>
        </div>
      </div>
    </div>
  );
}
