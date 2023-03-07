import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Provider from './context/Provider';
import AllCampaigns from './pages/AllCampaigns';
import Login from './pages/Login';
import NewCampaign from './pages/NewCampaign';
import SeeCampaigns from './pages/SeeCampaigns';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <NewCampaign />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/campaigns',
        element: <SeeCampaigns />,
      },
      {
        path: '/campaigns/all',
        element: <AllCampaigns />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={ router } />
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
