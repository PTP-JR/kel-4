import { Switch, Route } from "react-router-dom";
import "./App.css";
import DataHarryPotter from "./components/DataHarryPotter";
import Login from "./components/Login";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/home">
          <DataHarryPotter />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
