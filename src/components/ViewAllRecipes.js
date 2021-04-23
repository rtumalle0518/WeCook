import firebase from 'firebase';
import React,{useState,useEffect} from 'react';
import './UserRecipesGrid.css'
import { firestore } from '../firebase';
import RecipeCard from './RecipeCard';
import NavigationBar from './NavigationBar';
import moment from 'moment';
import Recipe from './Recipe';
import { recomposeColor } from '@material-ui/core';

var uid;
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        if (user != null) {
            uid = user.uid;
          }
    } else {
      // No user is signed in.
    }
  });
function Item(props) {
    return <li>{props.ingredient}</li>;
}

function UserRecipe() {
    
  const [recipes, setRecipes] = useState([]);
  
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
    <div>
    <NavigationBar />
      <section className="recipeGrid">
        {
          recipes && recipes.map(recipe=>{
            return(
              <RecipeCard 
                title={recipe.name} 
                date={moment(recipe.createdAt.toDate()).calendar()}
                description={recipe.description}
                ingredients={recipe.ingredients}
                directions={recipe.directions}
                cookingTime={recipe.cookingTime}
                servings={recipe.servings}
              />
            )
          })
        }
      </section>
    </div>
    
    
  );
}

export default UserRecipe;