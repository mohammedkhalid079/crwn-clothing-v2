// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp9IPgq9D5KrkDBgq2NhRDFjI68fDacEk",
  authDomain: "crown-clothing-v2-db-c1c63.firebaseapp.com",
  projectId: "crown-clothing-v2-db-c1c63",
  storageBucket: "crown-clothing-v2-db-c1c63.appspot.com",
  messagingSenderId: "409265881486",
  appId: "1:409265881486:web:5034d045496e35acea64df",
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);
console.log(fireBaseApp);

const provider = new GoogleAuthProvider();
console.log(provider);

provider.setCustomParameters({
  prompt: "select_account",
});

// getAuth() is returns a json web token
export const auth = getAuth();
console.log(auth);

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
console.log(db);

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  console.log(userAuth);
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    //we get exact date when get object
    const cretedAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        cretedAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

//this onAuthStateChanged is observable like signIn or signout token refresh events. its showing login or out
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
console.log(auth);
