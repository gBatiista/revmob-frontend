import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

import '../styles/SeeCampaigns.css';
import CampaignCard from '../components/CampaignCard';
import BestCampaign from '../components/BestCampaign';

export default function SeeCampaigns() {
  const [country, setCountry] = useState('ALL');
  const [campaign, setCampaign] = useState({});

  const getCampaign = async () => {
    let URL = 'http://localhost:3003/fetch';

    if (country !== 'ALL') URL += `?country=${country}`;

    const { data } = await axios.get(URL);
    setCampaign(data);
  };

  return (
    <div className="nav-container">
      <Navbar location="publisher" />
      <div>
        <Header />
        <div className="container">
          <BestCampaign getCampaign={ getCampaign } setCountry={ setCountry } />

          <div className="preview-container">
            <h2>Best Campaign</h2>
            <CampaignCard
              title={ campaign.title }
              description={ campaign.description }
              imgUrl={ campaign.image }
              conversionType={ campaign.conversion_type }
              bid={ campaign.bid }
              country={ campaign.country }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
