import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/database"
import "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyDVOmGXBvjf-4Nm8xs1pNWjSVVNn6y6zmc",
    authDomain: "auth-development-94c42.firebaseapp.com",
    databaseURL: "https://auth-development-94c42-default-rtdb.firebaseio.com/",
    projectId: "auth-development-94c42",
    storageBucket: "auth-development-94c42.appspot.com",
    messagingSenderId: "1091844701781",
    appId: "1:1091844701781:web:c073c807a8b763fe849edc"
})

export const firestore = firebase.firestore();
export const auth = app.auth()
export default app

