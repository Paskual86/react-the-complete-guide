import React from "react";
import Card from "../UI/Card/Card";
import UserItem from "../UserItem/UserItem";
import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.items.map((user) => (
          <UserItem key={user.id} id={user.id} name = {user.name} age = {user.age} onDelete={props.onDeleteItem}>
          </UserItem>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
