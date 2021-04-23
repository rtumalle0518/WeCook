import firebase from 'firebase';
import React,{useState,useEffect} from 'react';
import { firestore } from '../firebase';

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

function UserRecipe() {
    
  const [recipes, setRecipes] = useState([]);
  // const fetchRecipes=async()=>{
  //   const response=firestore.collection('recipes');
  //   const data=await response.get();
  //   data.docs.forEach(item=>{
  //    setRecipes([...recipes,item.data()])
  //   })
  // }

  // this.setState({recipes:recipes})

  /*Code below old and not usefull"
  const ref=firestore.collection("recipes");
  function getRecipes (){
    ref.onSnapshot((querySnapshot) =>{
      const items = [];
      querySnapshot.forEach((doc)=> {
        items.push(doc.data());

      });
      setRecipes(items);

    });
  }
  */
  /*Hint use code below and uncomment it to get the recipes of one user base on uid. So private recipes THIS WILL HELP FILTER PRIVATE RECIPES FROM ALL RECIPES
  const ref=firestore.collection("users").doc(uid).collection("recipes");
  function getRecipes (){
    ref.onSnapshot((querySnapshot) =>{
      const items = [];
      querySnapshot.forEach((doc)=> {
        items.push(doc.data());

      });
      setRecipes(items);

    });
  }
  */
  

  const ref=firestore.collectionGroup("recipes")
  function getRecipes (){
    ref.get().then((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
          console.log(doc.id, ' => ', doc.data());
      });
      setRecipes(items);
  });
  }

  useEffect(()=> {
    getRecipes();
  }, []);

  return (
    <div className="">
      {
        recipes && recipes.map(recipe=>{
          return(
            <div className="">
              <h4>{recipe.name}</h4>
              <p>{recipe.description}</p>
              <p>{recipe.directions}</p>
              <p>{recipe.ingredients}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default UserRecipe;