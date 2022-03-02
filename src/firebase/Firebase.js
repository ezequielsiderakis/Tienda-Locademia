import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyD0jB4sMd-EMfVr3M-g5G-xL1oUGS8mtXw",
  authDomain: "tienda-locademia.firebaseapp.com",
  projectId: "tienda-locademia",
  storageBucket: "tienda-locademia.appspot.com",
  messagingSenderId: "837167206593",
  appId: "1:837167206593:web:e8cd7ea405ce75eca24440",
  measurementId: "G-3W56WCVP6M",
});

export function getFirebase() {
  return app;
}
export function getFirestore() {
  return firebase.firestore(app);
}
