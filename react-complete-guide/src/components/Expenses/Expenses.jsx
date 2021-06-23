import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
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
    setExpenses(
      Object.values(originalExpenses).filter(
        (exp) => exp.date.getFullYear() === parseInt(year)
      )
    );
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
        <ExpenseList items={expenses}></ExpenseList>
      </Card>
    </div>
  );
}

export default Expenses;
