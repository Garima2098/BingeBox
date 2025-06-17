import React, { useState, useRef } from 'react';
import { checkValidateData } from '../../utils/validate';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../../utils/firebase';

const Login = () => {
  const [isLoginIn, setIsLoginIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleClickButton = (e) => {
    e.preventDefault(); // prevent form reload
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;
    if (!isLoginIn) {
      //Write the signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    } else {
      //write the signin logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };

  const handleSignInSignUp = (e) => {
    e.preventDefault();
    setIsLoginIn(!isLoginIn);
  };

  return (
    <div className="relative w-full h-screen">
      <img
        className="absolute w-full h-full object-cover scale-110"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/6863f6e8-d419-414d-b5b9-7ef657e67ce4/web/IN-en-20250602-TRIFECTA-perspective_27a3fdfa-126f-4148-b153-55d60b51be6a_large.jpg"
        alt="Netflix background"
      />

      <div className="absolute w-full h-full bg-black opacity-60" />

      {/* Sign In / Sign Up Form */}
      <div className="relative z-10 flex justify-center items-center h-full">
        <form className="bg-black/50 backdrop-blur-md text-white p-10 rounded-md max-w-md w-full">
          <h1 className="text-3xl font-bold mb-6">
            {isLoginIn ? 'Sign In' : 'Sign Up'}
          </h1>

          {!isLoginIn && (
            <input
              type="text"
              placeholder="Name"
              className="w-full p-4 mb-4 rounded bg-gray-700 text-white placeholder-gray-300 outline-none"
            />
          )}

          <input
            ref={email}
            type="email"
            placeholder="Email or phone number"
            className="w-full p-4 mb-4 rounded bg-gray-700 text-white placeholder-gray-300 outline-none"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full p-4 mb-6 rounded bg-gray-700 text-white placeholder-gray-300 outline-none"
          />
          {errorMessage && (
            <p className="text-red-500 text-sm mb-4 text-center">
              {errorMessage}
            </p>
          )}

          <button
            type="button"
            onClick={handleClickButton}
            className="w-full bg-[rgb(229,9,20)] py-3 rounded font-semibold hover:bg-red-700 transition"
          >
            {isLoginIn ? 'Sign In' : 'Sign Up'}
          </button>

          <div className="flex justify-between items-center text-sm text-gray-400 mt-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="accent-gray-500"
              />
              <span>Remember me</span>
            </label>
            <p className="cursor-pointer hover:underline">Need help?</p>
          </div>

          <p className="mt-8 text-gray-400 text-center">
            {isLoginIn ? 'New to Netflix?' : 'Already have an account?'}{' '}
            <button
              onClick={handleSignInSignUp}
              className="text-white hover:underline cursor-pointer"
            >
              {isLoginIn ? 'Sign up now' : 'Sign in'}
            </button>
          </p>

          <p className="text-xs text-gray-400 mt-4">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
