import firebase from "firebase";
// import * as firebase from 'firebase/app'
import { firebaseConfig } from "./firebaseConfig";
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const authenticate = firebase.auth();

export { db, authenticate };
  