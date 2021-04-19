import Signup from "./Signup"
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Redirect } from 'react-router-dom';
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import Recipe from "./Recipe";
import Homepage from "./Homepage";

import textbox from "./textbox";
import notFoundPage from "./notFoundPage"
import NewRecipe from "./NewRecipe"
import MealPlan from "./MealPlan";
import Survey from "./mealplanner/components/page/Survey";
import Plan from "./mealplanner/components/page/Plan"
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
            <Route path = "/recipe" component={Recipe}/> 
            <Route path = "/meal-plan" component={Plan}/> 
            <Route path = "/mealplan" component={MealPlan}/>
            <Route path ="/newrecipe" component= {NewRecipe}/>
            <Route path="/survey" component={Survey} />
            <Route path ="*" component= {notFoundPage}/>
            
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App;
