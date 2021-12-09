import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAR3ehuvR8JyZmShKWRd7hk6tsDubGZN6w",
  authDomain: "crwn-db-b2962.firebaseapp.com",
  projectId: "crwn-db-b2962",
  storageBucket: "crwn-db-b2962.appspot.com",
  messagingSenderId: "1005470319797",
  appId: "1:1005470319797:web:7d90b6c408f373f7b06afc"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;