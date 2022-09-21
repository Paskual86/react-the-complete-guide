import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { GetExpenses, SaveExpense } from "../../api/firebaseApi";
import useUser from "../../hooks/useUser";
import Main from "./Main";
import Menu from "./Menu";

export default function Home() {
  const [expenses, setExpenses] = useState([]);
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
    SaveExpense(expense, user.user.uid);
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

  useEffect(() => {
    if (user) {
      const getExpenses = async () => {
        const data = await GetExpenses(user.user.uid);
        setExpenses((prevExpenses) => {
          return [
            ...data.map((val) => ({
              id: val.id,
              title: val.title,
              amount: val.amount,
              date: new Date(val.date),
            })),
            ...prevExpenses,
          ];
        });

        var test = data.map((val) => ({
          id: val.id,
          title: val.title,
          amount: val.amount,
          date: new Date(val.date),
        }));
        console.log(test);
        console.log(test[0].date.getFullYear());
      };
      getExpenses().catch(console.error);
      // setExpenses(expensesFirebase);
    }
  }, [user]);

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
