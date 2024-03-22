import { useEffect, useState } from "react";
import SumDisplay from "./Components/SumDisplay/SumDisplay";
import ExpenseForm from "./Components/ExpenseForm/ExpenseForm";
import ListDisplayPage from "./Components/ListDisplayPage/ListDisplayPage";
import "./App.css";

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [expenseArray, setExpenseArray] = useState(
    window.localStorage.getItem(JSON.stringify("expenses")) || []
  );
  const [totalSum, setTotalSum] = useState(0);
  const [daySum, setDaySum] = useState(0);

  // DISPLAY SUMS IN HEADER
  const summarizeExpenses = () => {
    for (let expense of expenseArray) {
      setTotalSum(totalSum + Number(expense.amount));
      console.log(totalSum);
    }
  };

  const getTodaysSpending = () => {
    const dateObject = new Date();
    const date = `${dateObject.getFullYear()}-${dateObject.getMonth() + 1}-${dateObject.getDate()}`;
    const todaysExpensesArray = expenseArray.filter((expense) => date === expense.date);

    for (let expense of todaysExpensesArray) {
      setDaySum(daySum + Number(expense.amount));
    }
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
              handleSum={summarizeExpenses}
            />
          ) : (
            <ListDisplayPage
              expenses={expenseArray}
              handleExpense={handleExpense}
              formStateSetter={setIsFormOpen}
            />
          )}
        </section>

        <footer className="footer">2024 © SpendingFrenzy A/S</footer>
      </main>
    </>
  );
}

export default App;
