import Topbar from "./components/topbar/Topbar";
import Register from "./components/page/register/Register"
import Login from "./components/page/login/Login"
import Home from "./components/page/home/Home";  
import Settings from "./components/page/settings/Settings"
import Write from "./components/page/write/Write"
import Single from "./components/page/single/Single";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App () {
  const user = false;
  return (
    <Router>
      <Topbar/>
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/register">{user ? <Home/> : <Register />}</Route>
        <Route path="/login">{user ? <Home/> : <Login />}</Route>
        <Route path="/write">{user ? <Write/> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings/> : <Register />}</Route>
        <Route path="/post/:postId">
            <Single />
        </Route>
      </Switch>
    </Router>
  )
}

export default App