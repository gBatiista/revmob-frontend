import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import AllCampaigns from './pages/AllCampaigns';
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
    <RouterProvider router={ router } />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
