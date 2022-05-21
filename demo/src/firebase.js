import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyD6CH7cKGeNo-EBDYaRwv1uU-deouBJ5So",
    authDomain: "tinypostx.firebaseapp.com",
    databaseURL: "https://tinypostx-default-rtdb.firebaseio.com",
    projectId: "tinypostx",
    storageBucket: "tinypostx.appspot.com",
    messagingSenderId: "411006152247",
    appId: "1:411006152247:web:410a338fec1017f9b219b2",
    measurementId: "G-HPGW9VZZYX"
  };
  
  export const app = initializeApp(firebaseConfig);
  export const database = getFirestore(app)