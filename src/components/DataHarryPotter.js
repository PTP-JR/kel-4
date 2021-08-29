import { Navbar, Container, Card, Button, Collapse, ListGroup } from "react-bootstrap";
import { useEffect, useState } from "react";
import logo from "./img/logo.png";

function DataHarryPotter() {
  const [dataHarryPotter, setDataHarryPotter] = useState([]);

  useEffect(() => {
    fetch("http://hp-api.herokuapp.com/api/characters")
      .then((result) => result.json())
      .then((result) => setDataHarryPotter(result))
      .catch((err) => console.log(err));
  }, []);

  const [open, setOpen] = useState(false);

  return (
    <>
      <section>
        <Navbar fixed="top" bg="light" variant="dark">
          <Container>
            <Navbar.Brand href="#">
              <img alt="" src={logo} width="250" height="50" className="d-inline-block align-top" /> React Bootstrap
            </Navbar.Brand>
          </Container>
        </Navbar>
      </section>
      {dataHarryPotter.map((item) => (
        <section>
          <div className="Card">
            <Card border="light" style={{ width: "15rem" }}>
              <Card.Img className="Foto" variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Button variant="outline-secondary" size="sm" onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
                  <i>Show detail</i>
                </Button>
              </Card.Body>
              <Collapse in={open}>
                <div id="example-collapse-text" style={{ textAlign: "start" }}>
                  <ListGroup>
                    <ListGroup.Item variant="warning">Species: {item.species}</ListGroup.Item>
                    <ListGroup.Item variant="warning">House: {item.house}</ListGroup.Item>
                    <ListGroup.Item variant="warning">Actor: {item.actor}</ListGroup.Item>
                    <ListGroup.Item variant="warning">Date of Birth: {item.dateOfBirth}</ListGroup.Item>
                  </ListGroup>
                </div>
              </Collapse>
            </Card>
          </div>
        </section>
      ))}
    </>
  );
}
export default DataHarryPotter;
