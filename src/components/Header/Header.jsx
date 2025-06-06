import React from 'react';

const Header = () => {
  return (
    <div className="absolute w-full flex justify-between items-center px-10 py-6 z-30">
      <img
        className="w-40  p-3 ml-30 mt-2"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="logo"
      />
      <button className="bg-[rgb(229,9,20)] mr-30 mt-2 text-white px-5 py-1 rounded-md font-semibold hover:bg-red-700 transition">
        Sign In
      </button>
    </div>
  );
};

export default Header;
