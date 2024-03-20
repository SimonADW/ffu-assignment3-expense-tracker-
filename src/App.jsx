
import { useState } from 'react'
import './App.css'
import ExpenseForm from './Components/ExpenseForm/ExpenseForm'
import Layout from './Components/Layout/Layout'
import ListDisplayPage from './Components/ListDisplayPage/ListDisplayPage'

function App() {
const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <Layout >
        {isFormOpen ? <ExpenseForm formStateSetter={setIsFormOpen} />: <ListDisplayPage formStateSetter={setIsFormOpen} /> }
            
      </Layout>
    </>
  )
}

export default App
