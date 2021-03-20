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


const APP_ID = "687360d5";
const APP_KEY = "c71c04603df7bcbf88af4be62f76c588";

//below we define the useStates

const [recipes, setRecipes] = useState([]); //setting the state equal to whatever comes out of the API
const [search, setSearch] = useState("")
const [query, setQuery] = useState("chicken")



useEffect( () =>{ //dispatch call to fetch items // get recipes runs the function when useEffect is active
 getRecipes(); // eslint-disable-next-line
}, [query]); //only refreshes when query is called

const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`) //this allows to make async calls, the reason we use await is 
  //we dont know when the data will come back since we are using an external api
  const data = await response.json(); //this will format the data in a way that makes it easy to work with
  setRecipes(data.hits);
  console.log(data.hits)

}

const updateSearch = e => { //creating an event that happens on click/change to access the target 
  setSearch(e.target.value); //the value of the input
    }

const getSearch = e =>{ //event
  e.preventDefault(); //stops the page refreshing on each input
  setQuery(search); //now we will query whatever we have in our search
  setSearch(''); //after search, set our search back to empty string
}
//the getSearch will run every time we submit a form vv (see how it is called below)
// the onsubmit means that every time we hit our button, it will

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
      <div className = "App">
     <form onSubmit={getSearch} className="search-form"> 
       <input className="search-bar" type="text" value={search} onChange={updateSearch} />
       <button className="search-button" type= "submit">
         Search 
       </button> 
     </form>
     <div className = "meal">
     {recipes.map(recipe =>(
       <Recipe 
       key={recipe.recipe.label}
       title ={recipe.recipe.label} 
       calories={recipe.recipe.calories}
       image={recipe.recipe.image}
       ingredients={recipe.recipe.ingredients}
       />
     ))}
     </div>
     </div>
        
      </Route>
      </Switch>
    </Router>
  </div>
  );
};

export default App;
