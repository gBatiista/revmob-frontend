import React, { useState } from 'react';
import Form from '../components/Form';
import CampaignCard from '../components/CampaignCard';

import '../styles/NewCampaign.css';

export default function NewCampaign() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imgUrl, setImgUrl] = useState('');

  return (
    <div className="new-campaign-container">
      <Form
        title={ title }
        setTitle={ setTitle }
        description={ description }
        setDescription={ setDescription }
        imgUrl={ imgUrl }
        setImgUrl={ setImgUrl }
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
  );
}
