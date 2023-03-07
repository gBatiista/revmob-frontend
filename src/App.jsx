import { Outlet } from 'react-router-dom';
import './styles/App.css';
import './styles/Container.css';

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
