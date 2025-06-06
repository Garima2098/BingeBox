import React from 'react';
import LandingPage from '../LandingPage/LandingPage';
import Login from '../Login/Login';
import Browse from '../BrowsePage/Browse';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '/', element: <LandingPage /> },
        { path: '/login', element: <Login /> },
      ],
    },
    {
      path: '/browse',
      element: <Browse />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
