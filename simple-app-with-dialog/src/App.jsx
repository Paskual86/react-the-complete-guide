import React from "react";
import { useState } from "react";
import UserInput from "./components/UserInput/UserInput";
import UserList from "./components/UserList/UserList";
import "./App.css";

function App() {

  const [userList, setUserList] = useState([
    { text: 'Pablo (35)', id: 'g1' }
  ]);

  const addUserHandler = userInput => {
    setUserList(prevUsers => {
      const updatedUserList = [...prevUsers];
      updatedUserList.unshift({ text: userInput, id: Math.random().toString() });
      return updatedUserList;
    });
  };
  
  const deleteUserHandler = userId => {
    setUserList(prevUsers => {
      const updatedUserList = prevUsers.filter(user => user.id !== userId);
      return updatedUserList;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No Users found. Maybe add one?</p>
  );

  if (userList.length > 0) {
    content = (
      <UserList items={userList} onDeleteItem={deleteUserHandler}/>
    );
  }

  return (
    <div>
      <section id="user-form">
        <UserInput />
      </section>
      <section id="users">
        {content}
      </section>
    </div>
  );
}

export default App;
