import React, { useState } from 'react';
import axios from 'axios';

import Form from '../components/Form';
import CampaignCard from '../components/CampaignCard';
import CreateAlert from '../components/CreateAlert';
import Loading from '../components/Loading';

import Navbar from '../components/Navbar';
import Header from '../components/Header';

export default function NewCampaign() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [conversionType, setConversionType] = useState('CPM');
  const [bid, setBid] = useState(0);
  const [country, setCountry] = useState('ALL');
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showInfoAlert, setShowInfoAlert] = useState(false);
  const [requestError, setRequestError] = useState(false);

  const resetStates = () => {
    setTitle('');
    setDescription('');
    setImgUrl('');
    setConversionType('CPM');
    setBid(0);
    setCountry('ALL');
  };

  const createAd = async () => {
    if (title.length < 1 || bid <= 0) {
      setShowInfoAlert(true);
      return;
    }

    const ad = {
      title,
      description,
      image: imgUrl,
      conversion_type: conversionType,
      bid,
      country,
    };
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:3003/', ad);
      console.log(response);
    } catch (error) {
      console.error(error);
      if (error) setRequestError(true);
    }
    setLoading(false);
    setShowAlert(true);
    resetStates();
  };

  return (
    <div className="nav-container">
      <Navbar location="advertiser" />
      <div>
        <Header />
        <div className="container">
          {
            loading && <Loading />
          }
          {
            showInfoAlert && <CreateAlert
              type="info"
              closeAlert={ () => setShowInfoAlert(false) }
            />
          }
          {
            showAlert && <CreateAlert
              type={ !requestError ? 'success' : 'error' }
              closeAlert={ () => {
                setShowAlert(false);
                setRequestError(false);
              } }
            />
          }
          <Form
            title={ title }
            setTitle={ setTitle }
            description={ description }
            setDescription={ setDescription }
            imgUrl={ imgUrl }
            setImgUrl={ setImgUrl }
            bid={ bid }
            setBid={ setBid }
            conversionType={ conversionType }
            setConversionType={ setConversionType }
            country={ country }
            setCountry={ setCountry }
            createAd={ createAd }
          />

          <div className="preview-container">
            <h2>Preview</h2>

            <CampaignCard
              title={ title }
              description={ description }
              imgUrl={ imgUrl }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
