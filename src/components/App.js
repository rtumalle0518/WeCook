import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import Recipe from "./Recipe";
import Homepage from "./Homepage";

function App() { //the problem is probably the css it is enclosed in
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
            </Switch>
          </AuthProvider>
        </Router>
      </div>

    
  )
}

export default App;
