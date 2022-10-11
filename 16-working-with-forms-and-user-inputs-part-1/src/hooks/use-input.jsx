import { useState } from "react";

export default function useInput(validateFunction) {
  const [enteredValue, setEnteredValue] = useState("");
  const [touch, setTouch] = useState(false);

  const isValid = validateFunction ? validateFunction(enteredValue) : true;
  const hasError = !isValid && touch;
  const onChangeHandler = (event) => {
    setTouch(true);
    setEnteredValue(event.target.value);
  };

  const onBlurHandler = (event) => {
    setTouch(true);
    setEnteredValue(event.target.value);
  };

  const onReset = () => {
    setTouch(false);
    setEnteredValue("");
  };
  return {
    value: enteredValue,
    isValid,
    hasError,
    onChange: onChangeHandler,
    onBlur: onBlurHandler,
    onReset,
  };
}
