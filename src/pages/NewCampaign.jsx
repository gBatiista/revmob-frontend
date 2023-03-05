import React from 'react';
import Form from '../components/Form';
import PreviewCampaign from '../components/PreviewCampaign';

import '../styles/NewCampaign.css';

export default function NewCampaign() {
  return (
    <div className="new-campaign-container">
      <Form />
      <PreviewCampaign />
    </div>
  );
}
