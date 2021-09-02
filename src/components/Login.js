import { Form, Button, Container, Modal, Spinner } from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  const history = useHistory();

  const [user] = useState({ email: "kelompok4", password: "kelompok4" });

<<<<<<< HEAD
    const [user, setUser] = useState([
        {email: "kelompokempat@gmail.com",
        password : "kel4444"},
        {email: "admin123@gmail.com",
        password : "admin123"}
    ]);

    const [dataLogin, setDataLogin] = useState ({});
 
    const handleChange = (event) => {
        setDataLogin({
            ...dataLogin, 
            [event.target.name] : event.target.value
            });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(dataLogin);
      console.log(user);
      console.log(user.length);

      for (let i = 0; i < user.length; i++)  
        if (user[i].email === dataLogin.email){
            if (user[i].password === dataLogin.password) {
                history.push("/home");
               break;
        } else {
            alert ("email benar dan password salah");
            break;
            }
    } else if (
       user[i].email !== dataLogin.email &&
        user[i].password !== dataLogin.password
      ) {
        if(user.length -1 === i) {
          alert("salah");
          break;
        } else {
          continue;
        }
      }
     };

    
                
  return (
    <div>
      <h1>Login</h1>
      <form>
        <input type="text" name="email" placeholder="email" 
                id="" value={dataLogin.email} onChange={handleChange} />
        <input type="text" name="password" placeholder="password" 
                id="" value={dataLogin.password} onChange={handleChange} />

        <button onClick={handleSubmit}>Login</button>
      </form>
=======
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
          <h5>
            <strong> Login</strong> {""}
            <Spinner animation="grow" variant="danger" size="sm" />
            <Spinner animation="grow" variant="danger" />
          </h5>
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
>>>>>>> f08e8a1d09378c05b74c1c4aa3a6c0f82deace03
    </div>
  );
}

export default Login;
