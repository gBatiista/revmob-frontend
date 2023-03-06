// import { useEffect } from 'react';

import { Outlet } from 'react-router-dom';
// import Header from './components/Header';
import './styles/App.css';

function App() {
  return (
    <div className="background">
      <div className="app">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
