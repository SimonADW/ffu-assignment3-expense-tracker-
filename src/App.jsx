import { useEffect, useState } from "react";
import SumDisplay from "./Components/SumDisplay/SumDisplay";
import ExpenseForm from "./Components/ExpenseForm/ExpenseForm";
import ListDisplayPage from "./Components/ListDisplayPage/ListDisplayPage";
import "./App.css";

function App() {
  const [isFormOpen, setIsFormOpen] = useState();
  const [totalSum, setTotalSum] = useState(0);
  const [daySum, setDaySum] = useState(0);
  const [expenseArray, setExpenseArray] = useState(
      () => {
      const storedExpenses = window.localStorage.getItem("expenses");
      return storedExpenses ? JSON.parse(storedExpenses) : [];
    }
  );

  console.log(expenseArray);

  // GET TODAYS DATE IN ISOFORMAT
  const getTodaysDate = () => {
    const dateObject = new Date();
    const year = dateObject.getFullYear().toString();
    const month = dateObject.getMonth() + 1;
    const monthPadded = month.toString().padStart(2, 0);
    const date = dateObject.getDate().toString().padStart(2, 0);
    const dateString = `${year}-${monthPadded}-${date}`;
    return dateString;
  };

  // DISPLAY SUMS IN HEADER
  const summarizeExpenses = () => {
    let currentSum = 0;
    for (let expense of expenseArray) {
      currentSum = currentSum + Number(expense.amount);
    }
    setTotalSum(currentSum);
  };
 
  const getTodaysSpending = () => {
    let currentDaySum = 0;
    const todaysExpensesArray = expenseArray.filter(
      (expense) => getTodaysDate() === expense.expenseDate);
    for (let expense of todaysExpensesArray) {
      currentDaySum = currentDaySum + Number(expense.amount);
    }
    setDaySum(currentDaySum);
  };

  useEffect(() => {
    window.localStorage.setItem("expenses", JSON.stringify(expenseArray));
    summarizeExpenses();
    getTodaysSpending();
  }, [expenseArray]);

  // STORE NEW EXPENSES
  const handleExpense = (newExpense) => {
    setExpenseArray((prev) => [...prev, newExpense]);
    setIsFormOpen(false);
  };

  // DELETE EXPENSE
  const deleteExpense = (event) => {
    const indexToRemove = expenseArray.findIndex(
      (expense) =>
        expense.id.toString() ===
        event.target.parentElement.parentElement.parentElement.dataset.id
    );
    console.log(expenseArray);

    //UPDATE ARRAY AFTER DELETE
    setExpenseArray((prev) => {
      const expensesClone = [...prev];
      expensesClone.splice(indexToRemove, 1);
      return expensesClone;
    });
  };

  return (
    <>
      <main className="body">
        <header>
          <SumDisplay totalSum={totalSum} daySum={daySum} />
        </header>

        <section className="main-section">
          {isFormOpen ? (
            <ExpenseForm
              getTodaysDate={getTodaysDate}
              expenses={expenseArray}
              handleExpense={handleExpense}
              formStateSetter={setIsFormOpen}
            />
          ) : (
            <ListDisplayPage
              getTodaysDate={getTodaysDate}
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
