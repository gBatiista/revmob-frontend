import React from 'react';
import '../styles/Form.css';

export default function NewCampaign() {
  return (
    <div className="form-container">
      <h2>New Advertise</h2>

      <form>
        <div className="div-form">
          <label htmlFor="form-title">
            Title
            <input type="text" placeholder="Ad Title:" id="form-title" />
          </label>
        </div>

        <div className="div-form">
          <label htmlFor="form-description">
            Description
            <textarea
              type="text"
              placeholder="Ad Description:"
              className="form-description"
              id="form-description"
            />
          </label>
        </div>

        <div className="div-form">
          <label htmlFor="form-img">
            Image URL
            <input type="text" placeholder="Ad Image URL:" id="form-img" />
          </label>
        </div>

        <label className="form-select-label" htmlFor="form-conversion-type">
          Conversion Type
          <select name="country" id="form-conversion-type">
            <option value="CPM">CPM</option>
            <option value="CPC">CPC</option>
            <option value="CPI">CPI</option>
          </select>
        </label>

        <div className="div-form">
          <label htmlFor="form-bid">
            Bid
            <input type="number" placeholder="Ad Bid:" min={ 0 } />
          </label>
        </div>

        <label className="form-select-label" htmlFor="form-country">
          Country
          <select name="country" id="form-country">
            <option value="all">ALL</option>
            <option value="br">BR</option>
            <option value="usa">USA</option>
            <option value="pt">PT</option>
          </select>
        </label>

        <div className="div-btn">
          <button type="button">Create Advertise</button>
        </div>
      </form>
    </div>
  );
}
