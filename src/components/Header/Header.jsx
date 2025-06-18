import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { useDispatch } from 'react-redux';
import { removeUser } from '../../utils/userSlice';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLandingPage = location.pathname === '/';

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate('/');
      })
      .catch((error) => {
        console.error('Sign out failed:', error);
      });
  };

  return (
    <div className="absolute w-full flex justify-between items-center px-10 py-6 z-30">
      <img
        className="w-40 p-3 mt-2 cursor-pointer"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="logo"
        onClick={() => navigate('/')}
      />

      {isLandingPage ? (
        <button
          onClick={() => navigate('/login')}
          className="bg-[#e50914] text-white text-sm px-6 py-2 font-semibold rounded hover:bg-[#f40612] transition duration-300"
        >
          Sign In
        </button>
      ) : location.pathname === '/browse' ? (
        <button
          onClick={handleSignOut}
          className="bg-white text-black text-sm px-6 py-2 font-semibold rounded hover:bg-[#e6e6e6] transition duration-300"
        >
          Sign Out
        </button>
      ) : null}
    </div>
  );
};

export default Header;
