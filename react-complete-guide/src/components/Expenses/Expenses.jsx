import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

import "./Expenses.css";

function Expenses(props) {
  const originalExpenses = { ...props.expenses };
  const [filteredYear, setFilteredYear] = useState("2020");
  const [expenses, setExpenses] = useState(props.expenses);
  
  const expenseChangeFilterHandler = (selected) => {
    setFilteredYear(selected);
    onFilterExpenseHandler(selected);
  };

  const onFilterExpenseHandler = (year) => {
    setExpenses(Object.values(originalExpenses).filter(exp => exp.date.getFullYear() === parseInt(year)));
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={expenseChangeFilterHandler}
        ></ExpensesFilter>
      </Card>

      <Card className="expenses">
        {expenses.map((exp, itemId) => {
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
