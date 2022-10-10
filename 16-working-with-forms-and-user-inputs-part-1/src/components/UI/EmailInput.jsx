import { useState } from "react";
import "./EmailInput.css";

export default function EmailInput({ isValidEvent }) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [touch, setTouch] = useState(false);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const isValidEmailValue =
    enteredEmail.trim() !== "" && validateEmail(enteredEmail.trim());
  const isInvalidEmailInput = !isValidEmailValue && touch;

  const onChangeHandler = (event) => {
    setTouch(true);
    setEnteredEmail(event.target.value);
    if (isValidEvent) isValidEvent(isValidEmailValue);
  };

  const onBlurHandler = (event) => {
    setTouch(true);
    setEnteredEmail(event.target.value);
    if (isValidEvent) isValidEvent(isValidEmailValue);
  };

  return (
    <div>
      <input
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        type="email"
        id="email"
        value={enteredEmail}
      />
      {isInvalidEmailInput && <p className="error-text">Invalid Email</p>}
    </div>
  );
}
