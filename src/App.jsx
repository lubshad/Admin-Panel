
import './app.scss';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from "./screens/home/Home";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch
} from "react-router-dom";
import Users from './screens/users/users';

function App() {
  return (
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
          </Switch>
          </div>
        </div>
      </Router>
  );
}

export default App;
