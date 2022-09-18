import React from "react";
import Expenses from "../Expenses/Expenses";
import NewExpense from "../NewExpenses/NewExpense";

export default function Main({
  showExpenseForm,
  expenses,
  onCancelForm,
  onShowForm,
  onChangeExpense,
}) {
  return (
    <div>
      <NewExpense
        onChangeExpense={onChangeExpense}
        showExpenseForm={showExpenseForm}
        onCancelForm={onCancelForm}
        onOkForm={onShowForm}
      />
      <Expenses items={expenses}></Expenses>
    </div>
  );
}
