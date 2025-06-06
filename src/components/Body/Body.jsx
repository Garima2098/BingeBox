import React from 'react';
import LandingPage from '../LandingPage/LandingPage';
import Login from '../Login/Login';
import Browse from '../BrowsePage/Browse';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage />,
    },
    {
      path: '/browse',
      element: <Browse />,
    },
    {
      path: '/login',
      element: <Login />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
