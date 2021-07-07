import React, { useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import ErrorModal from "../UI/Modals/ErrorModal";
import styles from "./UserInput.module.css";

const UserInput = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();

    // Some validations
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }

    // The plus (+) allow to convert the value to number
    if (+enteredAge < 1) {
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <div>
      <ErrorModal title= "an error occurs" message="error" />
      <Card className={styles.input}>
        <form onSubmit={formSubmitHandler}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              onChange={usernameChangeHandler}
              value={enteredUsername}
            />
            <label htmlFor="age">Age (Years)</label>
            <input
              key="age"
              type="number"
              onChange={ageChangeHandler}
              value={enteredAge}
            />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default UserInput;
