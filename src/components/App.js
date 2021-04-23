import Signup from "./Signup";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import Recipe from "./Recipe";
import Homepage from "./Homepage";
import userSurvey from "./userSurvey";
import textbox from "./textbox";
import notFoundPage from "./notFoundPage";
import NewRecipe from "./NewRecipe";
import Survey from "./page/Survey";
import Plan from "./page/Plan";
import userInfo from "./userInfo";
import CookBook from "./Cookbook";
import UserRecipe from "./UserRecipes"
import ContactUs from "./ContactUs"
import RecipeCard from "./RecipeCard"
import UserRecipesPersonal from "./UserRecipesPersonal";
import NewRecipePersonal from "./newRecipePersonal";

function App() {
	return (
		<div>
			<Router>
				<AuthProvider>
					<Switch>
						<PrivateRoute exact path="/" component={Dashboard} />
						<Route path="/WeCook" component={Homepage} />
						<Route path="/signup" component={Signup} />
						<Route path="/login" component={Login} />
						<Route path="/forgot-password" component={ForgotPassword} />
						<Route path="/recipe" component={Recipe} />
						<Route path="/survey" component={Survey} />
						<Route path="/newrecipe" component={NewRecipe} />
						<Route path="/newRecipePersonal" component={NewRecipePersonal} />
						<Route path="/textbox" component={textbox} />
						<Route path="/meal-plan" component={Plan} />
						<Route path="/userSurvey" component={userSurvey} />
						<Route path="/userInfo" component={userInfo} />
						<Route path="/cookbook" component={CookBook} />
                        <Route path="/userrecipes" component={UserRecipe} />
						<Route path="/userRecipesPersonal" component={UserRecipesPersonal} />
						<Route path="/ContactUs" component={ContactUs} />
						<Route path="/recipecard" compnenet={RecipeCard} />
					</Switch>
				</AuthProvider>
			</Router>
		</div>
	);
}

export default App;
