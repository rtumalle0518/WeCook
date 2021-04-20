import React,{useState, useEffect} from 'react'
import NavigationBar from './NavigationBar'
import placehold from '../images/placeholder-image.png';
import thumbup from '../images/thumbup.png';
import thumbdown from '../images/thumbdown.png';
import "./Cookbook.css"

export default function CookBook(){
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
        <div className="rcard">
            {/* <div className="rcard"> */}
                <img  src={placehold} 
                alt="Food"
                className="cardimage">
                </img>
                <div className="cardcontent">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis urna metus
                    </p>
                    <p>Calories: {round} </p>
                </div>
                <div className="cardinfo">
                    <div>
                        <img src={thumbup}alt="thumpup"></img>
                        <img src={thumbdown}alt="thumpup"></img>
                    </div>
                    <div className="cardlink">
                        <a href="./" className="recipelink">View Recipe
                        </a>
                    </div>
                </div>
            </div>
        // </div>
    )
     }
 return(
     <div>
         <NavigationBar></NavigationBar>
         <div className="Header">
         <div className="cookbooktext">
             CookBook
         </div>
            <form onSubmit={getSearch} className="search-form"> 
                    <input className="search-bar" type="text" placeholder="Search" value={search} onChange={updateSearch} />
            </form>

            </div>
            <div className="maincontainer">
            <div className="SideBar">
            <ul>
                <li>Appetizers</li>
                <li>Breakfast</li>
                <li>Chicken Recipes</li>
                <li>Dinner</li>
                <li>Dessert</li>
                <li>Lunch</li>
                <li>Pizza</li>
                <li>Salads</li>
                <li>Soups</li>
            </ul>
            </div>
            <div className="container-1">
            {recipes.map(recipe =>(
                        <RecipeCard 
                        image={recipe.recipe.image}
                        key={recipe.recipe.label}
                        title ={recipe.recipe.label} 
                        calories={recipe.recipe.calories}
                        ingredients={recipe.recipe.ingredients}
                        />
                    ))}
            {/* <div class="item2">Pic1</div>
            <div class="item3">Pic2</div>  
            <div class="item4">Pic3</div>
            <div class="item5">Pic4</div>
            <div class="item6">Pic5</div>
            <div class="item7">Pic6</div> */}
            </div>
            </div>
         
     </div>
 )   
}

