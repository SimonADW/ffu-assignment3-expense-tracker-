import ListItem from "../ListItem/ListItem";
import style from "./ListDisplayPage.module.css"

export default function ListDisplayPage() {


	return <>
		<ul>
			<ListItem /> 
			<ListItem /> 
			<ListItem /> 
			<ListItem /> 
		</ul>

		<button className={style.addExpenseButton}>+</button>
	</>


}