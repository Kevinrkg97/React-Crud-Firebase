import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA4Qc4G47uJF0skbXsbgwruqaSiY1jtlGw",
  authDomain: "tareas-6eacd.firebaseapp.com",
  projectId: "tareas-6eacd",
  storageBucket: "tareas-6eacd.appspot.com",
  messagingSenderId: "662844568206",
  appId: "1:662844568206:web:9822bba9681189f9810fdf"
};

const fb = firebase.initializeApp(firebaseConfig)

export const db = fb.firestore();