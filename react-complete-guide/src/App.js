import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Main/Home";
import Login from "./components/Main/Login";
import NoPage from "./components/Main/NoPage";
import RegisterForm from "./components/UserAccess/RegisterForm";
import { AuthContextProvider } from "./store/auth-context";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
