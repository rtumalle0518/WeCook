import firebase from 'firebase';
import React,{useState,useEffect} from 'react';
import { firestore } from '../firebase';
import UploadRecipeImage from './UploadRecipeImage';
import useFirestore from '../hooks/useFirestore';
import RecipeCard from './RecipeCard';
//import useFirestore from '../hooks/useFirestore';
import NavigationBar from './NavigationBar'
import moment from 'moment';


var database = firebase.database();
var uid;
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        if (user != null) {
            uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                             // this value to authenticate with your backend server, if
                             // you have one. Use User.getToken() instead.
          }
    } else {
    }
  });

function ViewSubmittedRecipes() {
  //const { docs } = useFirestore('imagesRecipe');
  const [recipes, setRecipes] = useState([]);
  

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

export default ViewSubmittedRecipes;