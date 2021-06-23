import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const expenseChangeFilterHandler = (selected) => {
    setFilteredYear(selected);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={expenseChangeFilterHandler}
        ></ExpensesFilter>
      
        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>

        <ExpenseList items={filteredExpenses}></ExpenseList>
      </Card>
    </div>
  );
}

export default Expenses;
