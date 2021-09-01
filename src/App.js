import { Switch, Route } from "react-router-dom";
import "./App.css";
import DataHarryPotter from "./components/DataHarryPotter";
<<<<<<< HEAD
=======
import Login from "./components/Login";
// import about from "./components/about";
>>>>>>> main

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <>
     
        <DataHarryPotter />
      </>
=======
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
>>>>>>> main
    </div>
  );
}

export default App;
