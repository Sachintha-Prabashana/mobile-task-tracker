// firebaseConfig or firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// @ts-ignore - ignore firebase auth error
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnVA8nH4Wxd6yL3oeWTf16rIDRkNsjD5s",
  authDomain: "task-manager-00001.firebaseapp.com",
  projectId: "task-manager-00001",
  storageBucket: "task-manager-00001.firebasestorage.app",
  messagingSenderId: "129914161774",
  appId: "1:129914161774:web:7a42c1d0900f75cf62747f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// initialize auth kalla firebase code ekn enna . api eka hda gtta app ekn = for authentication
export const auth = initializeAuth(app, {
    // mehema danne firebase 9  walate klin dn mehema danna onna 
    persistence: getReactNativePersistence(AsyncStorage)
})

// initialize firestore database
export const db = getFirestore(app);