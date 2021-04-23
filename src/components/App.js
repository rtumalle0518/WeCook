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
import CreateNewRecipe from "./CreateNewRecipe";
import Survey from "./page/Survey";
import Plan from "./page/Plan";
import userInfo from "./userInfo";
import CookBook from "./Cookbook";
import ViewAllRecipes from "./ViewAllRecipes"
import ContactUs from "./ContactUs"
import ViewSubmittedRecipes from "./ViewSubmittedRecipes"

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
						<Route path="/CreateNewRecipe" component={CreateNewRecipe} />
						<Route path="/textbox" component={textbox} />
						<Route path="/meal-plan" component={Plan} />
						<Route path="/userSurvey" component={userSurvey} />
						<Route path="/userInfo" component={userInfo} />
						<Route path="/cookbook" component={CookBook} />
                        <Route path="/ViewAllRecipes" component={ViewAllRecipes} />
						<Route path="/ContactUs" component={ContactUs} />
						<Route path="/ViewSubmittedRecipes" component={ViewSubmittedRecipes}/>
					</Switch>
				</AuthProvider>
			</Router>
		</div>
	);
}

export default App;
