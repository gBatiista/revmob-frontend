import React from 'react';
import PropTypes from 'prop-types';

export default function BestCampaign(props) {
  const { setCountry, getCampaign } = props;

  return (
    <div className="best-campaign-container">
      <h2>Choose a Region</h2>
      <select onChange={ ({ target }) => setCountry(target.value) } id="">
        <option value="ALL">ALL</option>
        <option value="BR">Brazil</option>
        <option value="USA">United States</option>
        <option value="PT">Portugal</option>
        <option value="ES">Spain</option>
      </select>

      <button
        type="button"
        onClick={ getCampaign }
        className="get-campaign-btn"
      >
        Get Best Campaign
      </button>

    </div>
  );
}

BestCampaign.propTypes = {
  setCountry: PropTypes.func.isRequired,
  getCampaign: PropTypes.func.isRequired,
};
