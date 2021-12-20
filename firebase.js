import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCOSr7xFaGt3KinJApaH4sdMJONv0gRGv4',
  authDomain: 'fb-clone-2bf21.firebaseapp.com',
  projectId: 'fb-clone-2bf21',
  storageBucket: 'fb-clone-2bf21.appspot.com',
  messagingSenderId: '443258904441',
  appId: '1:443258904441:web:d05b63b5c561715d7899a8',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
