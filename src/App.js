import { Switch, Route, Link, Redirect } from "react-router-dom";
import "./App.css";
import DataHarryPotter from "./components/DataHarryPotter";

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
