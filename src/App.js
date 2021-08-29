
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Home from './components/Home';
import Register from './components/Register';
import Navbar from './components/Navbar';
function App() {
  return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
  );
}

export default App;
