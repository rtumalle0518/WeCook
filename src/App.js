import logo from './logo.svg';
import React, {useState, useEffect} from "react";
import fire from "./fire";
import Login from './Login';
import HomePage from "./HomePage";
import './App.css';

const App = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  //Deletes input from user
  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  //Deletes errors 
  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }
  const handleLogin = () => {
    clearErrors(); //Clears errors before user tries to login
    fire 
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch(err.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
  });
};

const handleSignup = () => {
  clearErrors(); //Clears errors before user tries to signup
  fire 
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch(err.code){
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
  });
};

const handleLogout = () => {
  fire.auth().signOut();
}

const authListener = () => {
  fire.auth().onAuthStateChanged(user => {
    if(user) {
      clearInputs(); //already have user so clear inputs
      setUser(user);      
    } else {
      setUser("");
    }
  });
};

useEffect(() => {
  authListener();
}, [])

return (
  <div className="App">
    {user ? (
      <HomePage handleLogout={handleLogout} />
    ) : (
      <Login 
        email={email} 
        setEmail={setEmail} 
        password={password} 
        setPassword={setPassword} 
        handleLogin={handleLogin} 
        handleSignup={handleSignup} 
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}
    />
    )}
  </div>
  );
};

export default App;
