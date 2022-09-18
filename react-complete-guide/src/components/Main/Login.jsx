import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebaseConfig";
import "./Login.css";
import AuthContext from "../../store/auth-context";
import { useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";

export default function Login() {
  const ctx = React.useContext(AuthContext);
  const { setUser } = useUser();

  const navigate = useNavigate();
  const [emailuser, setEmailuser] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmailUserHandler = (event) => {
    setEmailuser(event.target.value);
  };

  const onChangePasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault(); // Puro javascript. Evita que la pagina se recargue.
    try {
      signInWithEmailAndPassword(auth, emailuser, password)
        .then((userCredential) => {
          ctx.onLogin(emailuser, password);
          setUser(userCredential);
          console.log(userCredential);
          navigate("/");
        })
        .catch((error) => {
          console.log(error.code);
          console.log(error.message);
        });
    } catch (e) {
      console.log(e);
    }
  };

  const onCancelClickHandler = () => {
    console.log("Cancel Action");
  };

  return (
    <div className="login-container">
      <form onSubmit={onSubmitHandler}>
        <div className="login__controls">
          <div className="login__control">
            <label>User Name</label>
            <input
              type="text"
              value={emailuser}
              onChange={onChangeEmailUserHandler}
            />
          </div>
          <div className="login__control">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={onChangePasswordHandler}
            />
          </div>
        </div>
        <div className="login__actions">
          {/*En React es necesario especificar, cuando estoy dentro de un form que el tipo de un boton es button*/}
          <button type="button" onClick={onCancelClickHandler}>
            Cancel
          </button>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
