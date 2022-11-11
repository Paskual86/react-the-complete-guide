import React, { useCallback, useEffect, useState } from 'react';

let logoutTimer;

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token, expirationTime) => {},
  logout: () => {},
});

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime(); // Get the time in miliseconds
  const adjExpirationTime = new Date(expirationTime).getTime();

  const remaningDuration = adjExpirationTime - currentTime;
  return remaningDuration;
};

const getLocalStorageInformation = () => {
  const token = localStorage.getItem('token');
  const expirationTime = localStorage.getItem('expirationTime');

  const remainingTime = calculateRemainingTime(expirationTime);

  if (remainingTime <= 0) {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    return null;
  }

  return {
    token,
    remainingTime,
  };
};

const AuthContextProvider = (props) => {
  const localInfo = getLocalStorageInformation();

  let initialToken;

  if (localInfo) {
    initialToken = localInfo.token;
  }

  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token; // !! is a javascript

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem('token');
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  useEffect(() => {
    if (localInfo) {
      console.log(localInfo.remainingTime);
      logoutTimer = setTimeout(logoutHandler, localInfo.remainingTime);
    }
  }, [localInfo, logoutHandler]);

  const loginHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem('token', token);
    localStorage.setItem('expirationTime', expirationTime);
    const remainingTime = calculateRemainingTime(expirationTime);
    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
export default AuthContextProvider;
