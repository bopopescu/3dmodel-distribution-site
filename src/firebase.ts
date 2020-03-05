import firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/firebase-storage";

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

// const firebaseConfig = {
//     apiKey: "AIzaSyBK-5VDA_DJ8ItAFyBba2ltyC9RkWpLiQc",
//     authDomain: "test-d6eaf.firebaseapp.com",
//     databaseURL: "https://test-d6eaf.firebaseio.com",
//     projectId: "test-d6eaf",
//     storageBucket: "test-d6eaf.appspot.com",
//     messagingSenderId: "652690879524",
//     appId: "1:652690879524:web:a7110f8757b127b05b14b1"
// };

firebase.initializeApp(firebaseConfig);
export default firebase;