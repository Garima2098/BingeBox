// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyABho26woNyxAliN9xzZ-NvVn3-mNDak2w',
  authDomain: 'netflixgpt-a548b.firebaseapp.com',
  projectId: 'netflixgpt-a548b',
  storageBucket: 'netflixgpt-a548b.firebasestorage.app',
  messagingSenderId: '111013878139',
  appId: '1:111013878139:web:9f8d77d39fa7428e2b05de',
  measurementId: 'G-NZMXXG5G5E',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
