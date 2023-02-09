import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


const firebaseConfig = {
  apiKey: 'AIzaSyA_BqQe5RvBc-08IUlz98HX01eMKaehIFg',
  authDomain: 'websiteclone-9d135.firebaseapp.com',
  projectId: 'websiteclone-9d135',
  storageBucket: 'websiteclone-9d135.appspot.com',
  messagingSenderId: '569907336988',
  appId: '1:569907336988:web:c238a8f42433f474624cd9',
  measurementId: 'G-1BB1MHWT09',
}

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
