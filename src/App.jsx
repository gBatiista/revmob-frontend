import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import './styles/App.css';

function App() {
  return (
    <div className="background">
      <div className="app">
        <Navbar />
        <div className="container">
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
