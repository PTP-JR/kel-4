import { Navbar, Container, Card, Button, Collapse, ListGroup, Col } from "react-bootstrap";
import { SiNextdoor } from "react-icons/si";
import { FcAbout } from "react-icons/fc";
import { useEffect, useState } from "react";
import logo from "./img/logo.png";
import { Link } from "react-router-dom";

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
    <div className="Home">
      <section>
        <Navbar fixed="top" variant="dark" style={{ backgroundColor: "chocolate" }}>
          <Container fluid>
            <Navbar.Brand href="#">
              <img alt="" src={logo} width="250" height="60" className="d-inline-block align-top" />
            </Navbar.Brand>
            <Link to="/" style={{ justifyContent: "end" }}>
              <h5>
                <strong> Logout</strong>
              </h5>
            </Link>
          </Container>
        </Navbar>
      </section>
      <section>
        <Navbar fixed="bottom" variant="dark" style={{ backgroundColor: "chocolate" }}>
          <Container className="text-center mt-2 mb-2">
            <Col>
              <Link to="/home">
                <SiNextdoor size={30} />
              </Link>
            </Col>
            <Col>
              <Link to="/about">
                <FcAbout size={30} />
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
