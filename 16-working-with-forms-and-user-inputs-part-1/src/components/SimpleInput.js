import { useState } from "react";
import useInput from "../hooks/use-input";
import EmailInput from "./UI/EmailInput";

const SimpleInput = (props) => {
  const {
    value: enteredNameValue,
    isValid: isValidName,
    hasError: hasErrorName,
    onChange: onChangeNameHandler,
    onBlur: onBlurNameHandler,
    onReset: onResetNameHandler,
  } = useInput((value) => value.trim() !== "");

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [touchForm, setTouchForm] = useState(false);

  const classForm = hasErrorName ? "form-control invalid" : "form-control";

  let isValidForm = isValidName && isEmailValid;

  const isValidEmailEventHandler = (isValid) => {
    setIsEmailValid(isValid);
  };

  const onFormSubmitHandler = (event) => {
    event.preventDefault();
    setTouchForm(true);
    if (isValidName) console.log(enteredNameValue);
    else console.log(`Is not valid`);
    setTouchForm(false);
    onResetNameHandler();
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
          value={enteredNameValue}
        />
        {hasErrorName && <p className="error-text">Name Could not be empty</p>}
        <EmailInput isValidEvent={isValidEmailEventHandler}></EmailInput>
      </div>
      <div className="form-actions">
        <button disabled={!isValidForm}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
