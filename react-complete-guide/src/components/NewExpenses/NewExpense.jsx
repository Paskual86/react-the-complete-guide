import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const onChangeExpenseHandler = (expense) => {
    const expenseReceived = {
      ...expense,
    };
    props.onChangeExpense(expenseReceived);
    onShowFormHandler();
  };

  const onShowFormHandler = () => {
    setShowExpenseForm((prevStatus) => {
      return !prevStatus;
    });
  };

  const onClickHandler = () => {
    onShowFormHandler();
  };

  const onCancelFormHandler = () => {
    onShowFormHandler();
  };

  if (!showExpenseForm) {
    return (
      <div className="new-expense">
        <button onClick={onClickHandler}>Add Expense</button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        onChangeExpense={onChangeExpenseHandler}
        onCancel={onCancelFormHandler}
      ></ExpenseForm>
    </div>
  );
};

export default NewExpense;
