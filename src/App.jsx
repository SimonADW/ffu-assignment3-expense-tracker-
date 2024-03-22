
import { useState } from 'react'
import './App.css'
import ExpenseForm from './Components/ExpenseForm/ExpenseForm'
import Layout from './Components/Layout/Layout'
import ListDisplayPage from './Components/ListDisplayPage/ListDisplayPage'

function App() {
const [isFormOpen, setIsFormOpen] = useState(false);
const [expenseArray, setExpenseArray] = useState(window.localStorage.getItem(JSON.stringify("expenses")) || [])


const handleExpense = (newExpense)=> {
  setExpenseArray((prev) => [...prev, newExpense])
  setIsFormOpen(false)
  // window.localStorage.setItem("expenses", JSON.parse(expenseArray))
}


console.log(expenseArray);

  return (
    <>
      <Layout >
        {isFormOpen 
        ? 
        <ExpenseForm expenses={expenseArray} handleExpense={handleExpense} formStateSetter={setIsFormOpen} />
        : 
        <ListDisplayPage expenses={expenseArray} handleExpense={handleExpense} formStateSetter={setIsFormOpen} /> }
            
      </Layout>
    </>
  )
}

export default App
