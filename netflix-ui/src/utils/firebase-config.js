import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPy-62zVFYLFatrLIMv0L760A0rYX1UIs",
  authDomain: "mern-netflix-clone-98ae6.firebaseapp.com",
  projectId: "mern-netflix-clone-98ae6",
  storageBucket: "mern-netflix-clone-98ae6.appspot.com",
  messagingSenderId: "606319614495",
  appId: "1:606319614495:web:fc3c5e53ddea03cf61532a",
  measurementId: "G-75J1SPVQGD",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
