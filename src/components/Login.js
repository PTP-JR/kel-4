import { Form, Button, Container, Modal, Spinner } from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  const history = useHistory();

  const [user] = useState({ email: "kelompok4", password: "kelompok4" });

  const [dataLogin, setDataLogin] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    setDataLogin({
      ...dataLogin,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(dataLogin);
    if (dataLogin.email === user.email) {
      if (dataLogin.password === user.password) {
        history.push("/home");
      }
    } else {
      alert("username dan password salah");
    }
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="Login">
      <Container>
        <Link to="/" onClick={handleShow}>
          <h3>
            <strong> Login</strong> {""}
            <Spinner animation="grow" variant="danger" size="sm" />
            <Spinner animation="grow" variant="danger" />
          </h3>
        </Link>
        <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Selamat Datang</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text" name="email" placeholder="username" id="" value={dataLogin.username} onChange={handleChange} />
                <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="password" id="" value={dataLogin.password} onChange={handleChange} />
                <Form.Text className="text-muted">We'll never share your password with anyone else.</Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
              <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
}

export default Login;
