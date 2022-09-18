import React from "react";
import "./Modal.css";

function Modal({ children, onClose, onOk }) {
  return <div className="modal">{children}</div>;
}

export default Modal;
