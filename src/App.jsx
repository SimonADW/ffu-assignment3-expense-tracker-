import { useEffect, useState } from "react";
import SumDisplay from "./Components/SumDisplay/SumDisplay";
import ExpenseForm from "./Components/ExpenseForm/ExpenseForm";
import ListDisplayPage from "./Components/ListDisplayPage/ListDisplayPage";
import "./App.css";

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [expenseArray, setExpenseArray] = useState( []
    // window.localStorage.getItem(JSON.stringify("expenses")) || []
  );
  const [totalSum, setTotalSum] = useState(0);
  const [daySum, setDaySum] = useState(0);
  


  // DISPLAY SUMS IN HEADER
  const summarizeExpenses = () => {
    let currentSum =  0;
    for (let expense of expenseArray) {        
      currentSum = currentSum + Number(expense.amount);      
    }
    setTotalSum(currentSum)
  };

  const getTodaysSpending = () => {
    // CREATE DATESTRING SAME FORMAT AS IN EXPENSE
    const dateObject = new Date();
    const year = dateObject.getFullYear().toString();
    const month = dateObject.getMonth() + 1;
    const monthPadded = month.toString().padStart(2, 0)
    const date = dateObject.getDate().toString();    
    const dateString = `${year}-${monthPadded}-${date}`
    
    const todaysExpensesArray = expenseArray.filter((expense) => dateString === expense.getDate());
    let currentDaySum = 0
    for (let expense of todaysExpensesArray) {
      currentDaySum = currentDaySum + Number(expense.amount);    
    }
    setDaySum(currentDaySum);
  };

  useEffect(() => {
    summarizeExpenses();
    getTodaysSpending();
  }, [expenseArray]);

  // STORE NEW EXPENSES
  const handleExpense = (newExpense) => {
    setExpenseArray((prev) => [...prev, newExpense]);
    setIsFormOpen(false);
    // window.localStorage.setItem("expenses", JSON.parse(expenseArray))
  };

  // DELETE EXPENSE
  const deleteExpense = (event)=> {    
    const indexToRemove = expenseArray.findIndex((expense)=> expense.id.toString() === event.target.parentElement.parentElement.parentElement.dataset.id);
    console.log(expenseArray);
    
    //UPDATE ARRAY AFTER DELETE
    setExpenseArray((prev) => {
      const expensesClone = [...prev];
      expensesClone.splice(indexToRemove, 1);
      return expensesClone;
    });
  }

  return (
    <>
      <main className="body">
        <header>
          <SumDisplay totalSum={totalSum} daySum={daySum} />
        </header>

        <section>
          {isFormOpen ? (
            <ExpenseForm
              expenses={expenseArray}
              handleExpense={handleExpense}
              formStateSetter={setIsFormOpen}                        
            />
          ) : (
            <ListDisplayPage
              expenses={expenseArray}
              handleExpense={handleExpense}
              formStateSetter={setIsFormOpen}
              deleteExpense={deleteExpense}
            />
          )}
        </section>

      <footer className="footer">2024 © SpendingFrenzy A/S</footer>
      </main>      
    </>
  );
}

export default App;
