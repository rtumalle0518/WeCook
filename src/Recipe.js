import React from "react";
import style from './recipe.module.css'

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div>
            <h1 className = {style.recipe} >{title}</h1>

            <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>

            <img src={image} alt=""/>
            <p>calories: {calories}</p>


        </div>
    )
}

export default Recipe;