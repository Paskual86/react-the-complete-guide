import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

import "./Expenses.css";


function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020')
  const expenseChangeFilterHandler = (selected) => {
    setFilteredYear(selected);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter = {expenseChangeFilterHandler}></ExpensesFilter>
      </Card>
      
      <Card className="expenses">
        {props.expenses.map((exp, itemId) => {
          return (
            <ExpenseItem
              key={exp.id}
              title={exp.title}
              date={exp.date}
              amount={exp.amount}
            ></ExpenseItem>
          );
        })}
      </Card>
    </div>
  );
}

export default Expenses;
