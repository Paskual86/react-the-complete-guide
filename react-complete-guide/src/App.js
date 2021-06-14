import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

function App() {
  const onChangeExpenseHandler = (expense) => {
    const data = {
      ...expense
    }
    console.log('App');
    console.log(data);
  }
  return (
    <div>
      <NewExpense onChangeExpense={onChangeExpenseHandler}/>
      <Expenses></Expenses>      
    </div>
  );
}

export default App;
