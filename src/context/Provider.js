import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

export default function Provider({ children }) {
  const [user, setUser] = useState('');

  const context = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user],
  );

  return (
    <AppContext.Provider value={ context }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
