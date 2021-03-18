import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBXvehHFTpyMYX6Nwux4nwB_ngk-SCE6vI",
    authDomain: "se-project-5deee.firebaseapp.com",
    projectId: "se-project-5deee",
    storageBucket: "se-project-5deee.appspot.com",
    messagingSenderId: "61955322519",
    appId: "1:61955322519:web:c683df4e36a3cd60ae2fd2"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;
