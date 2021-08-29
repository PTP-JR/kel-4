import { useState } from "react";
import { useHistory } from "react-router-dom";

function Login() {
    const history = useHistory()

    const [user, setUser] = useState([
        {email: "kelompokempat",
        password : "4444"}
    ]);

    const [dataLogin, setDataLogin] = useState ([
        {email: "",
        password: ""}
    ]);
 
    const handleChange = (event) => {
        setDataLogin([
            ...dataLogin, 
            [event.target.name] = event.target.value
        ])
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(dataLogin);

        if (dataLogin.username === user.email){
            if (dataLogin.password === user.password) {
                history.push("/dataharrypotter")
            }
        } else {
            alert ("uname dan password salah")
        }
    }

    return (
        <div>
            <h1>Login</h1> 
            <form>
                <input type="text" name="email" placeholder="username" 
                id="" value={dataLogin.email} onChange={handleChange} />

                <input type="text" name="password" placeholder="password"
                id="" value={dataLogin.password} onChange={handleChange} />

                <button onClick={handleSubmit}>Login</button>

            </form>
        </div>
    );
}

export default Login;