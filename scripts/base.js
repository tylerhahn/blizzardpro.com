import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "@firebase/storage";
import "firebase/database";

const appConfig = {
  apiKey: "AIzaSyCDeTXQN8Zbqnw_m-mRCiUjmf9R3xJA0D8",
  authDomain: "dealerportal-2fb18.firebaseapp.com",
  databaseURL: "https://dealerportal-2fb18.firebaseio.com",
  projectId: "dealerportal-2fb18",
  storageBucket: "dealerportal-2fb18.appspot.com",
  messagingSenderId: "148462471446",
  appId: "1:148462471446:web:2bbb01249996edaa662837",
  measurementId: "G-TLB5SZ3EZD",
};

export const app = firebase.initializeApp(appConfig);

export const db = app.firestore();
export const storage = firebase.storage();
export const storageRef = storage.ref();
