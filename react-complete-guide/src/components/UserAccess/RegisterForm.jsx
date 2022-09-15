import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebaseConfig";
import "./RegisterForm.css";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
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
      createUserWithEmailAndPassword(auth, emailuser, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          console.log(error.code);
          console.log(error.message);
        });
    } catch (e) {
      console.log(e);
    }
  };
  const navigate = useNavigate();
  const onCancelClickHandler = () => {
    navigate(-1);
  };

  return (
    <div className="register-container">
      <form onSubmit={onSubmitHandler}>
        <div className="register__controls">
          <div className="register__control">
            <label>User Name</label>
            <input
              type="text"
              value={emailuser}
              onChange={onChangeEmailUserHandler}
            />
          </div>
          <div className="register__control">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={onChangePasswordHandler}
            />
          </div>
        </div>
        <div className="register__actions">
          {/*En React es necesario especificar, cuando estoy dentro de un form que el tipo de un boton es button*/}
          <button type="button" onClick={onCancelClickHandler}>
            Cancel
          </button>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}
