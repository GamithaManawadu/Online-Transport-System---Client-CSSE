import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";


// Firebase Configurations
const firebaseConfig = {
    apiKey: "AIzaSyBe4tN79A6ihqKEOTygQdpy_ghlEob5AbE",
    authDomain: "csse---transport.firebaseapp.com",
    databaseURL: "https://csse---transport-default-rtdb.firebaseio.com",
    projectId: "csse---transport",
    storageBucket: "csse---transport.appspot.com",
    messagingSenderId: "783562018759",
    appId: "1:783562018759:web:b88f6a1624e2ee70b653e2",
    measurementId: "G-54EP3CJ18H"
};

let singletonInstance = null;

class Singleton {
    constructor() {
        if (!singletonInstance) {
            singletonInstance = this;
            firebase.initializeApp(firebaseConfig);
            singletonInstance = firebase;
      
        }
        
        return singletonInstance;
    }
}


const singletonObject = new Singleton();

export default singletonObject;