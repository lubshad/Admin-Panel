
import './app.scss';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from "./screens/home/Home";

function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <div className="body">
        <Sidebar></Sidebar>
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
