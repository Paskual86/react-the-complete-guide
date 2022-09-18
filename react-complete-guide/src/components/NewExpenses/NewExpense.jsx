import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import Backdrop from "../Common/Backdrop";
import Modal from "../Common/Modal";

const NewExpense = (props) => {
  return (
    <>
      {props.showExpenseForm && <Backdrop onClick={props.onCancelForm} />}
      {props.showExpenseForm && (
        <Modal text="Are you sure?" onOk={props.onOkForm}>
          <ExpenseForm
            onChangeExpense={props.onChangeExpense}
            onCancel={props.onCancelForm}
          ></ExpenseForm>
        </Modal>
      )}
    </>
  );
};

export default NewExpense;
