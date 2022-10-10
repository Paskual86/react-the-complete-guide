import { useState } from "react";
import EmailInput from "./UI/EmailInput";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [touchForm, setTouchForm] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && touchForm;
  const classForm = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  let isValidForm = enteredNameIsValid && isEmailValid;

  const onChangeNameHandler = (event) => {
    setTouchForm(true);
    setEnteredName(event.target.value);
  };

  const onBlurNameHandler = (event) => {
    setTouchForm(true);
    setEnteredName(event.target.value);
  };

  const isValidEmailEventHandler = (isValid) => {
    setIsEmailValid(isValid);
  };

  const onFormSubmitHandler = (event) => {
    event.preventDefault();
    setTouchForm(true);
    if (nameInputIsInvalid) console.log(enteredName);
    else console.log(`Is not valid`);
    setTouchForm(false);
  };

  return (
    <form onSubmit={onFormSubmitHandler}>
      <div className={classForm}>
        <label htmlFor="name">Your Name</label>
        <input
          onChange={onChangeNameHandler}
          onBlur={onBlurNameHandler}
          type="text"
          id="name"
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name Could not be empty</p>
        )}
        <EmailInput isValidEvent={isValidEmailEventHandler}></EmailInput>
      </div>
      <div className="form-actions">
        <button disabled={!isValidForm}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
