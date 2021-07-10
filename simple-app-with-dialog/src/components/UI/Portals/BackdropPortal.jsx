import React from "react";
import ReactDOM from "react-dom";

const BackdropPortal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        props.component,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default BackdropPortal;
