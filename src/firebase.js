import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAA5QHF4pBVdW8rQqufSqB5i1TcR8XhjFc",
  authDomain: "amazzon-clone1.firebaseapp.com",
  databaseURL: "https://amazzon-clone1.firebaseio.com",
  projectId: "amazzon-clone1",
  storageBucket: "amazzon-clone1.appspot.com",
  messagingSenderId: "678765889909",
  appId: "1:678765889909:web:f8f49390e58d136b0c2b3c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
