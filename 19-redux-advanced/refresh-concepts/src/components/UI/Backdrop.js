import React from "react";
import "./Backdrop.css";

function Backdrop({ onClick }) {
  return <div className="backdrop" onClick={onClick} />;
}

export default Backdrop;
