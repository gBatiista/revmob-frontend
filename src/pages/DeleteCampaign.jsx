import React from 'react';

import Navbar from '../components/Navbar';
import Header from '../components/Header';

import '../styles/DeleteCampaign.css';

export default function DeleteCampaign() {
  const deleteAd = () => {

  };

  return (
    <div className="nav-container">
      <Navbar location="advertiser" />
      <div>
        <Header on="advertiser" />
        <div className="container">
          <div className="delete-container">
            <h2>Campaign</h2>
            <label htmlFor="ad-id">Enter the campaign ID</label>
            <input type="text" placeholder="Campaign ID:" id="ad-id" />
            <button onClick={ deleteAd }>Delete Campaign</button>
          </div>
        </div>
      </div>
    </div>
  );
}
