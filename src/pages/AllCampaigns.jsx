/* eslint-disable react/jsx-max-depth */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import CampaignCard from '../components/CampaignCard';

import left from '../assets/left-arrow.png';
import right from '../assets/right-arrow.png';

import '../styles/AllCampaigns.css';

export default function AllCampaigns() {
  const [campaigns, setCampaigns] = useState();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const getAll = async () => {
      const URL = 'http://localhost:3003/fetch/all';

      const { data } = await axios.get(URL);
      setCampaigns(data);
    };

    getAll();
  }, []);

  const before = () => {
    if (index === 0) {
      setIndex(campaigns.length - 1);
      return;
    }

    setIndex(index - 1);
  };

  const next = () => {
    if (index === campaigns.length - 1) {
      setIndex(0);
      return;
    }

    setIndex(index + 1);
  };

  return (
    <div className="nav-container all-container">
      <Navbar location="publisher" />
      <div>
        <Header />
        <div className="container">

          <div className="div-left">
            <button onClick={ before }>
              <img className="arrows left" src={ left } alt="" />
            </button>
          </div>

          <div className="preview-container all-campaigns-container">
            <h2>All Campaigns</h2>
            {
              campaigns && (
                <CampaignCard
                  title={ campaigns[index].title }
                  description={ campaigns[index].description }
                  imgUrl={ campaigns[index].image }
                  bid={ campaigns[index].bid }
                  conversionType={ campaigns[index].conversion_type }
                  country={ campaigns[index].country }
                />
              )
            }

          </div>

          <div className="div-right">
            <button onClick={ next }>
              <img className="arrows right" src={ right } alt="" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
