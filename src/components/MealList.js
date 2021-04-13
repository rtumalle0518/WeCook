import React, { useState } from "react";
import Meal from "./MealPlan";
import NavigationBar from "./NavigationBar";



export default function MealList({ }) {
    //below we define the useStates
    
    const [mealData, setMealData] =  useState([]); //setting the state equal to whatever comes out of the API
    const [calories, setCalories] = useState(2000);
    const nutrients = mealData.nutrients;
    
    

    function getMealData() {
      fetch(
        `https://api.spoonacular.com/mealplanner/generate?apiKey=cb1c464d94f142c08b156c5beddade8b&timeFrame=day&targetCalories=${calories}`
      )
        .then((response) => response.json())
        .then((data) => {
          setMealData(data);
        })
        .catch(() => {
          console.log("error");
        });
    }
  
    function handleChange(e) {
      setCalories(e.target.value);
    }
  
    
    
    return (
      
        <main>
          <section className="nutrients">
            <h1>Macros</h1>
            <ul>
              <li>Calories: {nutrients.calories.toFixed(0)}</li>
              <li>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</li>
              <li>Fat: {nutrients.fat.toFixed(0)}</li>
              <li>Protein: {nutrients.protein.toFixed(0)}</li>
            </ul>
          </section>
    
          <section className="meals">
            {mealData.meals.map((meal) => {
              return <Meal key={meal.id} meal={meal} />;
            })}
          </section>

          <div className="App">
            <section className="controls">
            <input
            type="number"
            placeholder="Calories (e.g. 2000)"
            onChange={handleChange}
            />
          <button onClick={getMealData}>Get Daily Meal Plan</button>
            </section>
          {mealData && <MealList mealData={mealData} />}
          </div>
        </main>
    );

  }


