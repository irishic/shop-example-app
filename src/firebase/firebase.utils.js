import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDp72-uWq_G73pHXBLEjqF78tCR7eLGs5s",
  authDomain: "shop-sample-db.firebaseapp.com",
  databaseURL: "https://shop-sample-db.firebaseio.com",
  projectId: "shop-sample-db",
  storageBucket: "shop-sample-db.appspot.com",
  messagingSenderId: "1081876783727",
  appId: "1:1081876783727:web:5ce42d41461bfcf9c9e39a",
  measurementId: "G-YQEG29G1TK"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = await firestore.doc(`users/${userAuth.uid}`);
  const userSnapshot = await userRef.get();

  if (!userSnapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (e) {
      console.warn("error creating user " + e.message);
    }
  }

  return userRef;
};

export default firebase;