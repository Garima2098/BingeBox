import React, { useEffect } from 'react';
import LandingPage from '../LandingPage/LandingPage';
import Login from '../Login/Login';
import Browse from '../BrowsePage/Browse';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../../utils/userSlice';

const Body = () => {
  const dispatch = useDispatch();

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

  //Calling the auth api only once
  useEffect(() => {
    //All the update of the user logging in , logging out from the oneplace
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //User sign in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        // Signed iN-> Navigate to browse page
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  }, []);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
