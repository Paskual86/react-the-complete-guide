import React from "react";
import Button from "../UI/Button";
import styles from "./UserInput.module.css";

const UserInput = (props) => {
  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles["form-control"]}`}>
        <label key="username">Username</label>
        <input htmlFor="username" type="text" />
        <label key="age">Age (Years)</label>
        <input htmlFor="age" type="text" />
      </div>
      <Button type="submit">Add User</Button>
    </form>
  );
};

export default UserInput;
