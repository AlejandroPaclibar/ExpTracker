
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdRRxHjTznFtIC7hALsQP34LXkRyMyBWA",
  authDomain: "fir-tovuejs-57688.firebaseapp.com",
  projectId: "fir-tovuejs-57688",
  storageBucket: "fir-tovuejs-57688.appspot.com",
  messagingSenderId: "92838323961",
  appId: "1:92838323961:web:5acb5680be6dfdaedea428",
  measurementId: "G-XBYDLEEFNF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default db