import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Form.css';

export default function Form(props) {
  const {
    title,
    setTitle,
    description,
    setDescription,
    imgUrl,
    setImgUrl,
    bid,
    setBid,
    conversionType,
    setConversionType,
    country,
    setCountry,
    createAd,
  } = props;

  const MAX_TITLE_LENGTH = 20;
  const MAX_DESCRIPTION_LENGTH = 50;

  return (
    <div className="form-container">
      <h2>New Advertise</h2>

      <form>
        <div className="div-form">
          <label htmlFor="form-title">
            Title
            <input
              type="text"
              value={ title }
              onChange={ ({ target }) => (
                target.value.length < MAX_TITLE_LENGTH && setTitle(target.value)
              ) }
              placeholder="Ad Title:"
              id="form-title"
            />
          </label>
        </div>

        <div className="div-form">
          <label htmlFor="form-description">
            Description
            <textarea
              type="text"
              value={ description }
              onChange={ ({ target }) => (
                target.value.length < MAX_DESCRIPTION_LENGTH
                && setDescription(target.value)
              ) }
              placeholder="Ad Description:"
              className="form-description"
              id="form-description"
            />
          </label>
        </div>

        <div className="div-form">
          <label htmlFor="form-img">
            Image URL
            <input
              type="text"
              value={ imgUrl }
              onChange={ ({ target }) => setImgUrl(target.value) }
              placeholder="Ad Image URL:"
              id="form-img"
            />
          </label>
        </div>

        <label className="form-select-label" htmlFor="form-conversion-type">
          Conversion Type
          <select
            name="country"
            value={ conversionType }
            onChange={ ({ target }) => setConversionType(target.value) }
            id="form-conversion-type"
          >
            <option value="CPM">CPM</option>
            <option value="CPC">CPC</option>
            <option value="CPI">CPI</option>
          </select>
        </label>

        <div className="div-form">
          <label htmlFor="form-bid">
            Bid
            <input
              type="number"
              value={ bid }
              onChange={ ({ target }) => setBid(Number(target.value)) }
              placeholder="Ad Bid:"
              min={ 0 }
            />
          </label>
        </div>

        <label className="form-select-label" htmlFor="form-country">
          Country
          <select
            name="country"
            value={ country }
            onChange={ ({ target }) => setCountry(target.value) }
            id="form-country"
          >
            <option value="ALL">ALL</option>
            <option value="BR">BR</option>
            <option value="USA">USA</option>
            <option value="PT">PT</option>
            <option value="ES">ES</option>
          </select>
        </label>

        <div className="div-btn">
          <button type="button" onClick={ createAd }>Create Advertise</button>
        </div>
      </form>
    </div>
  );
}

Form.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  setDescription: PropTypes.func.isRequired,
  imgUrl: PropTypes.string.isRequired,
  setImgUrl: PropTypes.func.isRequired,
  bid: PropTypes.number.isRequired,
  setBid: PropTypes.func.isRequired,
  conversionType: PropTypes.string.isRequired,
  setConversionType: PropTypes.func.isRequired,
  country: PropTypes.string.isRequired,
  setCountry: PropTypes.func.isRequired,
  createAd: PropTypes.func.isRequired,
};
