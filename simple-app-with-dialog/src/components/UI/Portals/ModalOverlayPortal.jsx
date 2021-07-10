import React from "react";
import ReactDOM from "react-dom";

const ModalOverlayPortal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        props.component,
        document.getElementById("backdrop-root")
      )}
    </>
  );
};

export default ModalOverlayPortal;
