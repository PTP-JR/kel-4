import { Switch, Route } from "react-router-dom";

import "./App.css";
import DataHarryPotter from "./components/DataHarryPotter";
import Login from "./components/Login";
// import about from "./components/about";

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
          <about />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
