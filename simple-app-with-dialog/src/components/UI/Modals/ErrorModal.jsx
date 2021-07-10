import React from "react";
import BackdropPortal from "../Portals/BackdropPortal";
import ModalOverlayPortal from "../Portals/ModalOverlayPortal";
import Card from "../Card/Card";
import Button from "../Button/Button";
import styles from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};
const ErrorModal = (props) => {
  return (
    <>
      <BackdropPortal component={<Backdrop onConfirm={props.onConfirm} />} />
      <ModalOverlayPortal
        component={
          <ModalOverlay
            title={props.title}
            message={props.message}
            onConfirm={props.onConfirm}
          />
        }
      />
    </>
  );
};

export default ErrorModal;
