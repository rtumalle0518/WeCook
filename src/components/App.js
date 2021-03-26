import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import Recipe from "./Recipe";

function App() { //the problem is probably the css it is enclosed in
  return (
    <Container fluid className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div>
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute path="/WeCook" component={Dashboard} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
                <Route path = "/recipe" component={Recipe}/> 
              </Switch>
            </AuthProvider>
          </Router>
        </div>
    </Container>
    
  )
}

export default App;
