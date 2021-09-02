import { useState } from "react";
import { useHistory } from "react-router-dom";

function Login() {

    const history = useHistory()

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
    </div>
  );
}

export default Login;
