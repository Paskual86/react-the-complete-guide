import useInput from "../hooks/use-input";
import EmailInput from "./UI/EmailInput";

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const SimpleInput = (props) => {
  const {
    value: enteredNameValue,
    isValid: isValidName,
    hasError: hasErrorName,
    onChange: onChangeNameHandler,
    onBlur: onBlurNameHandler,
    onReset: onResetNameHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmailValue,
    isValid: isValidEmail,
    hasError: hasErrorEmail,
    onChange: onChangeEmailHandler,
    onBlur: onBlurEmailHandler,
    onReset: onResetEmailHandler,
  } = useInput(validateEmail);

  const classForm = hasErrorName ? "form-control invalid" : "form-control";

  let isValidForm = isValidName && isValidEmail;

  const onFormSubmitHandler = (event) => {
    event.preventDefault();
    if (!isValidForm) {
      return;
    }
    console.log(`Name: ${enteredNameValue}. Email: ${enteredEmailValue}`);
    onResetNameHandler();
    onResetEmailHandler();
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
        <EmailInput
          onChange={onChangeEmailHandler}
          onBlur={onBlurEmailHandler}
          hasError={hasErrorEmail}
          value={enteredEmailValue}
        ></EmailInput>
      </div>
      <div className="form-actions">
        <button disabled={!isValidForm}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
