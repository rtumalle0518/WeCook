import logo from './logo.svg';
import React, {useState, useEffect} from "react";
import fire from "./fire";
import Login from './Login';
import HomePage from "./HomePage";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import DashBoard from "./DashBoard"
import Recipe from "./Recipe"

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
  /* Exact path = "/" is the first page you see like facebook. Ask you to login/signup.

     <Route path = "nameOfPath">
      <nameOfPath/>
     </Route>

     Note: Replace nameOfPath with name of exact javascript file name, for example - DashBoard.
     Also remember to put this [import nameOfPath from "./nameOfPath"] all the way ontop of this App.js file,
     for example - import DashBoard from "./DashBoard"

     Note 2: Then in any javascript file aside from App.js you could put this [<Link to = "/nameOfPath">nameOfPath</Link>]
     This adds a button to go to any javascript file that you added below in the Routes.
     Also remember to add [import {Link} from "react-router-dom"] in the top of the javascript file 
     to make the Link tag work. Look at HomePage.js for an example. 
  */
  <div className="App">
    <Router>
      <Switch>
      <Route exact path = "/WeCook"> 
          {user ? (
            <HomePage handleLogout = {handleLogout}/>
          ): (
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
      </Route>
      <Route path = "/DashBoard"> 
        <DashBoard/>
      </Route>
      <Route path = "/Recipe">
        <Recipe/>
      </Route>
      </Switch>
    </Router>
  </div>
  );
};

export default App;
