import React from "react";
import ExpenseItem from "./ExpenseItem";

import "./ExpenseList.css";

const ExpenseList = (props) => {
  
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((exp, itemId) => {
        return (
          <ExpenseItem
            key={exp.id}
            title={exp.title}
            date={exp.date}
            amount={exp.amount}
          ></ExpenseItem>
        );
      })}
    </ul>
  );
};

export default ExpenseList;
