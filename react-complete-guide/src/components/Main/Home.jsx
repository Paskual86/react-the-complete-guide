import React, { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";
import Main from "./Main";
import Menu from "./Menu";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

export default function Home() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const location = useLocation();
  const { user, clearSession } = useUser();
  const navigate = useNavigate();

  const onLoggedOutHandler = () => {
    clearSession();
    navigate("/login");
  };

  const onChangeExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    onShowFormHandler();
  };

  const onShowFormHandler = () => {
    setShowExpenseForm((prevStatus) => {
      return !prevStatus;
    });
  };

  const onCancelFormHandler = () => {
    onShowFormHandler();
  };

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  const onAddNewExpenseHandler = () => {
    onShowFormHandler();
  };

  return (
    <>
      <Menu
        onLoggedOut={onLoggedOutHandler}
        onAddNewExpense={onAddNewExpenseHandler}
      ></Menu>
      <Main
        expenses={expenses}
        showExpenseForm={showExpenseForm}
        onChangeExpense={onChangeExpenseHandler}
        onCancelForm={onCancelFormHandler}
      />
    </>
  );
}
