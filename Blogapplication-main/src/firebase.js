// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDTJ7l_ZxVaHRp7jOn7y6kqtoum4ZBCLFM',
  authDomain: 'vedioapp-1a3ac.firebaseapp.com',
  databaseURL: 'https://vedioapp-1a3ac-default-rtdb.firebaseio.com',
  projectId: 'vedioapp-1a3ac',
  storageBucket: 'vedioapp-1a3ac.appspot.com',
  messagingSenderId: '1084723254267',
  appId: '1:1084723254267:web:243c2785a420dd67d1f15e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
