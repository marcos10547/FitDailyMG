import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGtnMT6tOmaQE_RiUabhuJ8rIcPPKKfbg",
  authDomain: "fitdailymg.firebaseapp.com",
  projectId: "fitdailymg",
  storageBucket: "fitdailymg.firebasestorage.app",
  messagingSenderId: "46630643809",
  appId: "1:46630643809:web:3329654789c7cde6b7e220",
  measurementId: "G-Y3C9583QH8"
};

// En Next.js, esto evita que se inicialice la app dos veces al recargar
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
