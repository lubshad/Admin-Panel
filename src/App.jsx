
import './app.scss';
import {Sidebar} from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from "./screens/home/Home";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch
} from "react-router-dom";
import Users from './screens/users/users';
import User from './screens/user-details/user_details';
import UserDetails from './screens/user-details/user_details';
import NewUser from './screens/new_user/new_user';

function App() {
  return (
    <div>

      <Router className="App">
        <Topbar></Topbar>
        <div className="body">
          <Sidebar></Sidebar>
          <div className="route-section">

            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/users">
                <Users></Users>
              </Route>
              <Route path="/user">
                <UserDetails></UserDetails>
              </Route>
              <Route path="/new-user">
                <NewUser></NewUser>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
