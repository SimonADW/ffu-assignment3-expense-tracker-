import ListItem from "../ListItem/ListItem";
import style from "./ListDisplayPage.module.css"

export default function ListDisplayPage({formStateSetter, expenses, deleteExpense}) {
	


	return <>
		<ul>
			{
			expenses.map((expense)=> {
				return <ListItem key={expense.id} currentItem={expense} deleteExpense={deleteExpense} />
			})
			} 
		</ul>

		<button onClick={()=>formStateSetter(true)} className={style.addExpenseButton}>+</button>
	</>


}