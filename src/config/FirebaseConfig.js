
import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDgtD52jZi5d4VYPRu63EgV4BmDGD46X_s",
  authDomain: "react-app-5f01f.firebaseapp.com",
  projectId: "react-app-5f01f",
  storageBucket: "react-app-5f01f.appspot.com",
  messagingSenderId: "186564545029",
  appId: "1:186564545029:web:b91a6cde5139c6fa08aa6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app) 

export {
    auth
  
}