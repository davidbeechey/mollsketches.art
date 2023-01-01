// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBaRwvWCb-NVWDYWGgm4ukMci5gl3h8zsA",
    authDomain: "mollsketches-98b65.firebaseapp.com",
    projectId: "mollsketches-98b65",
    storageBucket: "mollsketches-98b65.appspot.com",
    messagingSenderId: "166066641647",
    appId: "1:166066641647:web:eb3f36de9eb6cc9c9d591a",
    measurementId: "G-LSYBRXZ8JL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);
