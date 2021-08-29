import { Switch, Route, Link, Redirect } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import DataHarryPotter from "./components/DataHarryPotter";
import Login from "./components/Login";

function App() {
  const [login, setLogin] = useState(true);

  return (
    <div className="App">
      <Login />
      <DataHarryPotter />
    </div>
  );
}

export default App;
