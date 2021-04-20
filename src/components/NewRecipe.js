import React, { useContext, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { firestore } from "../firebase";
import { useHistory } from "react-router-dom";

export default function NewRecipe() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [directions, setDirections] = useState("");
  const [description, setDescription] = useState("");
  const [validate, setValidated] = useState(false);
  const [currentUser, goToLogin] = useAuth();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  }
  if(!currentUser){

  }


  async function saveRecipe() {

    const ingredientsArray = ingredients.split("\n");
    const directionsArray = directions.split("\n")


      await firestore
        .collection("recipes")
        .add({
          name: title,
          description: description,
          ingredients: ingredientsArray,
          directions: directionsArray,
        });

    setTitle("");
    setIngredients("");
    setDescription("");
    setDirections("");
  };


  return (
      <div className="new-recipe">
        <h1>New recipe</h1>
        <form>
          <input
            type="text"
            placeholder="Recipe Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <textarea
            type="text"
            placeholder="Ingredients separated by comma"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
          />
          <textarea
            placeholder="Directions seperated by line"
            value={directions}
            required
          />
          <button onClick={saveRecipe}>Save recipe</button>
        </form>
      </div>
  );
};