import ListItem from "../ListItem/ListItem";
import style from "./ListDisplayPage.module.css"

export default function ListDisplayPage({formStateSetter, expenses, setExpenseArray, deleteExpense, getTodaysDate}) {
	
	return <>
		{/* RENDER LIST OF TODOS */}
		<ul>
			{
				expenses.map((expense)=> {
					return <ListItem key={expense.id} currentItem={expense} deleteExpense={deleteExpense} getTodaysDate={getTodaysDate} />
				})
			} 
		</ul>

		{/* RENDER RESET BUTTON IF TODOS EXIST */}
		{	expenses.length > 0 &&
			<button onClick={()=>setExpenseArray([])} className={style.resetButton}>Clear all</button>			
		}

		{/* ADD TODO BUTTON */}
		<button data-tooltip-id="expense-app-tooltip" data-tooltip-content="Add expense" onClick={()=>formStateSetter(true)} className={style.addExpenseButton}>+</button>
		
	</>


}