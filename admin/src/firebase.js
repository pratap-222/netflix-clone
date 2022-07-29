// import firebase from "firebase";

import firebase from 'firebase/app'
import "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyCTkDNK6tEVMO9TBYKPOTTOrOQSNd4e4Kw",
    authDomain: "netflix-f72bf.firebaseapp.com",
    projectId: "netflix-f72bf",
    storageBucket: "netflix-f72bf.appspot.com",
    messagingSenderId: "735848809520",
    appId: "1:735848809520:web:d867ccff93d03fb80e59f5",
    measurementId: "G-JM91F80ZSJ"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
