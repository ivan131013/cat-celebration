// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzV5wHeZs8hy2pEd0KTyBwmSVVrqRNuPk",
  authDomain: "catrespectcounter.firebaseapp.com",
  projectId: "catrespectcounter",
  storageBucket: "catrespectcounter.appspot.com",
  messagingSenderId: "507261132975",
  appId: "1:507261132975:web:9049f68b68ea7e2394745a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
