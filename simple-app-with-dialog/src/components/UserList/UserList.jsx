import React from "react";
import UserItem from "../UserItem/UserItem";
import styles from './UserList.module.css';

const UserList = props => {
    return (
        <ul className={styles['user-list']}>
          {props.items.map(user => (
            <UserItem
              key={user.id}
              id={user.id}
              onDelete={props.onDeleteItem}
            >
              {user.text}
            </UserItem>
          ))}
        </ul>
      );
}

export default UserList;
