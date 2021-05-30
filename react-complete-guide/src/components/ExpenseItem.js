import './ExpenseItem.css';

function ExpenseItem() {
    return(
        <div className="expense-item">
            <div>July 8th of 1986</div>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
                <div className="expense-item_price">$294.67</div>
            </div>
        </div>
    );
}

export default ExpenseItem;