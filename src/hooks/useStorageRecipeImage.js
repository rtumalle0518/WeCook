import { useState, useEffect } from 'react';
import { projectStorage, firestore, timestamp } from '../firebase';
import firebase from '../firebase';
var uid;
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        if (user != null) {
            uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                             // this value to authenticate with your backend server, if
                             // you have one. Use User.getToken() instead.
          }
    } else {
      // No user is signed in.
    }
  });

const useStorage = (fileRecipe) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(fileRecipe.name);
    const collectionRef = firestore.collection('imagesRecipe').doc(uid);
    
    storageRef.put(fileRecipe).on('state_changed', (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, async () => {
      const url = await storageRef.getDownloadURL();
      const createdAt = timestamp();
      await collectionRef.set({ url, createdAt });
      setUrl(url);
    });
  }, [fileRecipe]);

  return { progress, url, error };
}

export default useStorage;