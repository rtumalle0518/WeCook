import firebase from 'firebase';
import React,{useState,useEffect} from 'react';
import './UserRecipesGrid.css'
import { firestore } from '../firebase';
import RecipeCard from './RecipeCard';
import NavigationBar from './NavigationBar';



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
  
  useEffect(()=> {
    getRecipes();
  }, []);

  return (
    <div>
      <NavigationBar />
      <section className="recipeGrid">
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </section>
    </div>
    // <div className="">
    //   {
    //     recipes && recipes.map(recipe=>{
    //       return(
    //         <div className="">
    //           <h4>{recipe.name}</h4>
    //           <p>{recipe.description}</p>
    //           <p>{recipe.directions}</p>
    //           <p>{recipe.ingredients}</p>
    //         </div>
    //       )
    //     })
    //   }
    // </div>
  );
}

export default UserRecipe;