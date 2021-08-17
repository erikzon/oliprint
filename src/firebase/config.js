import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword  } from "firebase/auth";
import { getStorage, ref  } from "firebase/storage";
import { getFirestore, serverTimestamp, getDocs } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAk9nBuffr2FCAxaCWI-hR2UbZBr-q3pLo",
    authDomain: "oliprint.firebaseapp.com",
    projectId: "oliprint",
    storageBucket: "oliprint.appspot.com",
    messagingSenderId: "363023813979",
    appId: "1:363023813979:web:3a6f596c6f08337e405e7e"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const fireStore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
const timestamp = serverTimestamp(firebaseApp)

export { fireStore, auth, storage, timestamp }