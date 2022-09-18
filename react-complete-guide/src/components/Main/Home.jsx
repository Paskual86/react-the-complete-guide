import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";
import Main from "./Main";
import Menu from "./Menu";

export default function Home() {
  const location = useLocation();
  const { user, clearSession } = useUser();

  const navigate = useNavigate();
  const onLoggedOutHandler = () => {
    clearSession();
    navigate("/login");
  };

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <>
      <Menu onLoggedOut={onLoggedOutHandler}></Menu>
      <Main />
    </>
  );
}
