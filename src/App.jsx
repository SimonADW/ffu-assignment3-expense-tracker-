
import './App.css'
import ExpenseForm from './Components/ExpenseForm/ExpenseForm'
import Layout from './Components/Layout/Layout'
import ListDisplayPage from './Components/ListDisplayPage/ListDisplayPage'

function App() {


  return (
    <>
      <Layout>
        <ExpenseForm />
        <ListDisplayPage />
      </Layout>
    </>
  )
}

export default App
