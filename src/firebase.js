import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";
import reportWebVitals from "./reportWebVitals";

reportWebVitals(console.log);

const firebaseConfig = {
  apiKey: "AIzaSyDbsp6PTkAViC_Gc7tEdfbmGaiuIfe6qeY",
  authDomain: "kidsplaysafer.firebaseapp.com",
  projectId: "kidsplaysafer",
  storageBucket: "kidsplaysafer.appspot.com",
  messagingSenderId: "240701503508",
  appId: "1:240701503508:web:8fbc2b66096bbac9b40f01",
  measurementId: "G-KXY051ZPS5",
};

// init firebase app
const app = initializeApp(firebaseConfig);

// init firebase services
export const db = getFirestore(app);
export const perf = getPerformance(app);
if (window.location.hostname !== "localhost") getAnalytics(app);

export default app;
