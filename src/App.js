import { Switch, Route, Link, Redirect } from "react-router-dom";
import "./App.css";
import DataHarryPotter from "./components/DataHarryPotter";
import { useState } from "react";
import Login from "./components/Login"

function App() {

  const [login, setLogin] = useState(true);

  return (
    <div className="App">
     
        <DataHarryPotter />
      
       
      
      <Login />
    </div>
  );
}

export default App;
