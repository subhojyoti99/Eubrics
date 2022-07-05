import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyjbHt2tM-MYG4_3DfbkK3NXRhGbZTj_Q",
  authDomain: "eubrics-f1488.firebaseapp.com",
  projectId: "eubrics-f1488",
  storageBucket: "eubrics-f1488.appspot.com",
  messagingSenderId: "389758601009",
  appId: "1:389758601009:web:dc3fa14bd45be2de1bd210",
  measurementId: "G-913V26B4QS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);