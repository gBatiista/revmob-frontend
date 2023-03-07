import { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import AppContext from './context/AppContext';
import './styles/App.css';
import './styles/Container.css';

function App() {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user === '') {
      navigate('/login');
    }
  }, [navigate, user]);

  return (
    <div className="background">
      <div className="app">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
