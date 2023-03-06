import React from 'react';

import loading from '../assets/loading.gif';

export default function Loading() {
  return (
    <div className="alert-background">
      <div className="alert-container">
        <img className="loading" src={ loading } alt="Loading" />
      </div>

    </div>
  );
}
