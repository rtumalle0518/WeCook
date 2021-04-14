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
import Survey from "./Survey";
import textbox from "./textbox";
import notFoundPage from "./notFoundPage"
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
            <Route path = "/survey" component={Survey}/> 
            <Route path="/textbox" component={textbox} />
            <Route path ="*" component= {notFoundPage}/>
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App;
