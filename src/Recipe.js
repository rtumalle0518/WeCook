import React from "react";
import style from './recipe.module.css'

const Recipe = ({title, calories, image, ingredients}) => {

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

export default Recipe;