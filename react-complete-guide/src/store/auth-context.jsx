import React from "react";
import useUser from "../hooks/useUser";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (user) => {},
});

export const AuthContextProvider = (props) => {
  const { setUser } = useUser();
  const logoutHandler = () => {};
  const loginHandler = (user) => {
    setUser(user);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: false,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
