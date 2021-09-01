import { Navbar, Container, Card, Button, Collapse, ListGroup, Col } from "react-bootstrap";
import { SiNextdoor } from "react-icons/si";
import { FcAbout } from "react-icons/fc";
import { useEffect, useState } from "react";
import logo from "./img/logo.png";
import { Link } from "react-router-dom";

function DataHarryPotter() {
  const [dataHarryPotter, setDataHarryPotter] = useState([]);

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters")
      .then((result) => result.json())
      .then((result) => setDataHarryPotter(result))
      .catch((err) => console.log(err));
  }, []);

  const [open, setOpen] = useState(false);

  return (
    <div className="Home">
      <section>
        <Navbar fixed="top" variant="dark" bg="light">
          <Container>
            <Navbar.Brand href="#">
              <img alt="" src={logo} width="150" height="50" className="d-inline-block align-top" />
            </Navbar.Brand>
            <Link to="/" style={{ justifyContent: "end" }}>
              <h6>
                <strong> Logout</strong>
              </h6>
            </Link>
          </Container>
        </Navbar>
      </section>
      <section>
        <Navbar fixed="bottom" variant="dark" bg="light">
          <Container className="text-center mt-2 mb-2">
            <Col>
              <Link to="/home">
                <SiNextdoor size={25} />
              </Link>
            </Col>
            <Col>
              <Link to="/about">
                <FcAbout size={25} />
              </Link>
            </Col>
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
    </div>
  );
}
export default DataHarryPotter;
