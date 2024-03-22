import ListItem from "../ListItem/ListItem";
import style from "./ListDisplayPage.module.css"

export default function ListDisplayPage({formStateSetter, expenses}) {
	


	return <>
		<ul>
			{
			expenses.map((expense)=> {
				return <ListItem key={expense.id} currentItem={expense} />
			})
			} 
		</ul>

		<button onClick={()=>formStateSetter(true)} className={style.addExpenseButton}>+</button>
	</>


}