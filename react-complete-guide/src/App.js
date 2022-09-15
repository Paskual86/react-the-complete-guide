import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Main/Home";
import Login from "./components/Main/Login";
import Main from "./components/Main/Main";
import NoPage from "./components/Main/NoPage";
import RegisterForm from "./components/UserAccess/RegisterForm";
import { AuthContextProvider } from "./store/auth-context";
import AuthRequired from "./store/auth-required";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Router>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />}></Route>
            <Route
              path="/home"
              element={
                <AuthRequired>
                  <Main />
                </AuthRequired>
              }
            ></Route>
            <Route path="/register" element={<RegisterForm />}></Route>

            <Route path="*" element={<NoPage />} />
          </Routes>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
