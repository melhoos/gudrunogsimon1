// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhxo1C7KVaEyKE_OPWkUbK-jEtWv54L3E",
  authDomain: "emwedding-894f8.firebaseapp.com",
  projectId: "emwedding-894f8",
  storageBucket: "emwedding-894f8.appspot.com",
  messagingSenderId: "415793134244",
  appId: "1:415793134244:web:166f071742397f4ec90431",
  measurementId: "G-3GHWB1SYXE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
