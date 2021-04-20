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
// import Survey from "./Survey";
import textbox from "./textbox";
import notFoundPage from "./notFoundPage";
import NewRecipe from "./NewRecipe";
import Survey from "./page/Survey";
import Plan from "./page/Plan";
import CookBook from "./Cookbook";

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
						<Route path="/textbox" component={textbox} />
						<Route path="/meal-plan" component={Plan} />
						<Route path="/cookbook" component={CookBook} />
					</Switch>
				</AuthProvider>
			</Router>
		</div>
	);
}

export default App;
