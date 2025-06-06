import React from 'react';
import Header from '../Header/Header';

const LandingPage = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <img
        className="absolute h-full w-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/6863f6e8-d419-414d-b5b9-7ef657e67ce4/web/IN-en-20250602-TRIFECTA-perspective_27a3fdfa-126f-4148-b153-55d60b51be6a_large.jpg"
        alt="background"
      />

      <div className="absolute h-full w-full bg-black opacity-60 z-10" />

      <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-black via-transparent to-transparent z-20" />
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black via-transparent to-transparent z-20" />

      <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black via-transparent to-transparent z-20" />
      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black via-transparent to-transparent z-20" />

      <div className="relative z-30">
        <Header />
      </div>
      <div className="relative z-30 flex flex-col items-center justify-center text-white text-center mt-50 px-4">
        <h1 className="text-5xl font-bold max-w-4xl">Unlimited movies,</h1>
        <h1 className="text-5xl font-bold max-w-4xl">TV shows and more</h1>
        <p className="text-xl mt-4">Starts at ₹149. Cancel at any time.</p>
        <p className="text-lg mt-6">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        {/* Email input and button */}
        <div className="mt-6 w-full max-w-xl flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Email address"
            className="p-4 flex-1 rounded-md border border-gray-500 bg-[rgb(43,37,37)] text-black placeholder-gray-500 outline-none"
          />

          <button className="bg-[rgb(229,9,20)] text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
