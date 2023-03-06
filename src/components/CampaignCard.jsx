import React from 'react';
import PropTypes from 'prop-types';
import defaultImg from '../assets/defaultCampaignImg.jpg';

import '../styles/CampaignCard.css';

import icon from '../assets/user.png';
import share from '../assets/share.png';
import like from '../assets/like.png';
import comment from '../assets/comment.png';
import reactions from '../assets/reactions.png';

export default function CampaignCard(props) {
  const {
    title,
    description,
    imgUrl,
  } = props;

  return (
    <div className="preview-ad">
      <div className="publisher">
        <img src={ icon } alt="publisher" />
        <div className="publisher-text">
          <h3>Publisher</h3>
          <p>Sponsored</p>
        </div>
      </div>
      <img src={ imgUrl || defaultImg } className="ad-img" alt="advertise" />
      <div className="ad-info">
        <div className="ad-text">
          <h3>{ title || 'Title'}</h3>
          <p>{ description || 'Description'}</p>
        </div>
        <div className="ad-btn">
          <p>Learn More</p>
        </div>
      </div>
      <div className="ad-reactions">
        <img src={ reactions } alt="reactions" />
        <div className="reaction-blur" />
      </div>
      <div className="ad-social">
        <div className="social-group">
          <img className="social-icon" src={ like } alt="like" />
          <p>Like</p>
        </div>

        <div className="social-group">
          <img className="social-icon" src={ comment } alt="comment" />
          <p>Comment</p>
        </div>

        <div className="social-group">
          <img className="social-icon" src={ share } alt="share" />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
}

CampaignCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};
