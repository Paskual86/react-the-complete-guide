import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "./auth-context";

function AuthRequired(props) {
  const ctx = React.useContext(AuthContext);
  let location = useLocation();
  if (!ctx.isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return props.children;
}

export default AuthRequired;
