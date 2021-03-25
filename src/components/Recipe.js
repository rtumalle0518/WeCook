import React, { useState, useEffect } from "react";
import style from './recipe.module.css'
import './App.css';

export default function Recipe() {
    //below we define the useStates

    const [recipes, setRecipes] = useState([]); //setting the state equal to whatever comes out of the API
    const [search, setSearch] = useState("")
    const [query, setQuery] = useState("chicken")
    const APP_ID =  "687360d5"
    const APP_KEY = "c71c04603df7bcbf88af4be62f76c588"
    
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

    const RecipeCard = ({title, calories, image, ingredients}) => {

        const round = Math.round(calories);
        
        return(
            <div className = {style.recipe}>
                <h1 >{title}</h1>
    
                <ol>
                    {ingredients.map(ingredient => (
                        <li>{ingredient.text}</li>
                    ))}
                </ol>
    
                <p>calories: {round} </p>
    
                <img className = {style.image} src={image} alt=""/>
      
            </div>
        )
    }

    return(
        <>
            <div className = "App">
                <form onSubmit={getSearch} className="search-form"> 
                    <input className="search-bar" type="text" value={search} onChange={updateSearch} />
                    <button className="search-button" type= "submit">
                        Search 
                    </button> 
                </form>

                <div className = "meal">

                    {recipes.map(recipe =>(
                        <RecipeCard 
                        key={recipe.recipe.label}
                        title ={recipe.recipe.label} 
                        calories={recipe.recipe.calories}
                        image={recipe.recipe.image}
                        ingredients={recipe.recipe.ingredients}
                        />
                    ))}
            
                </div>
            </div>
            
            
        </>
    )
}
