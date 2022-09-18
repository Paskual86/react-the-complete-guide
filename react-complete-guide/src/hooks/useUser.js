import { useState } from "react";

function useUser() {
  function getUser() {
    const userInformation = sessionStorage.getItem("user");
    const userInfoJSON = JSON.parse(userInformation);
    return userInfoJSON;
  }
  const [user, setUser] = useState(getUser());

  function saveUser(user) {
    sessionStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  }

  function clearSession() {
    sessionStorage.clear();
    setUser(user);
  }

  return {
    setUser: saveUser,
    clearSession: clearSession,
    user,
  };
}

export default useUser;
