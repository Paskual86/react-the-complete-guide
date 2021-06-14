import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const onChangeExpenseHandler = (expense) => {
        const expenseReceived = {
            ...expense
        }
        props.onChangeExpense(expenseReceived)        
    }

    return (<div className="new-expense">
        <ExpenseForm onChangeExpense={onChangeExpenseHandler}></ExpenseForm>
    </div>);
}

export default NewExpense;