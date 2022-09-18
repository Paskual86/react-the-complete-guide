import React from "react";
import "./Menu.css";

function Menu({ onLoggedOut, onAddNewExpense }) {
  return (
    <div className="menu-expense">
      <div className="actions">
        <button className="add-expense" onClick={onAddNewExpense}>
          Add Expense
        </button>
      </div>
      <div className="logout">
        <button onClick={onLoggedOut}>Logout</button>
      </div>
    </div>
  );
}

export default Menu;
