import { Switch, Route } from "react-router-dom";
import "./App.css";
import DataHarryPotter from "./components/DataHarryPotter";
import Login from "./components/Login";
import About from "./components/about";
import "./index.css";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function App() {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Login />

          <Modal show={show}>
            <Modal.Header>
              <Modal.Title>Hallo</Modal.Title>
            </Modal.Header>
            <Modal.Body>Selamat datang di Hogwarts.</Modal.Body>
            <Modal.Footer>
              <Button variant="success" size="sm" onClick={handleClose}>
                Oke
              </Button>
            </Modal.Footer>
          </Modal>
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
