import React from "react";
import "./Menu.css";

function Menu({ onLoggedOut }) {
  return (
    <div className="menu-expense">
      <button onClick={onLoggedOut}>Logout</button>
    </div>
  );
}

export default Menu;
