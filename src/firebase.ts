import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD3_KWF8gWzceNwYzZX3dlTYW7enxvoNsg",
    authDomain: "freed-44dd6.firebaseapp.com",
    databaseURL: "https://freed-44dd6.firebaseio.com",
    projectId: "freed-44dd6",
    storageBucket: "freed-44dd6.appspot.com",
    messagingSenderId: "1030040677473",
    appId: "1:1030040677473:web:6baa014037d1e116d50e20",
    measurementId: "G-0N33M75ZZZ"
};

firebase.initializeApp(firebaseConfig);
export default firebase;