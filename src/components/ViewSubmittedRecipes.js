import firebase from 'firebase';
import React,{useState,useEffect} from 'react';
import { firestore } from '../firebase';
import UploadRecipeImage from './UploadRecipeImage';
//import useFirestore from '../hooks/useFirestore';
import NavigationBar from './NavigationBar'
import RecipeCard from './RecipeCard'
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
//   Hint use code below and uncomment it to get the recipes of one user base on uid. So private recipes THIS WILL HELP FILTER PRIVATE RECIPES FROM ALL RECIPES
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
 
  
/* 
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
 */
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