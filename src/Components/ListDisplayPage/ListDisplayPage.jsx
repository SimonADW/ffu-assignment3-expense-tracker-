import ListItem from "../ListItem/ListItem";
import style from "./ListDisplayPage.module.css"

export default function ListDisplayPage({formStateSetter}) {


	return <>
		<ul>
			<ListItem /> 
			<ListItem /> 
			<ListItem /> 
			<ListItem /> 
		</ul>

		<button onClick={()=>formStateSetter(true)} className={style.addExpenseButton}>+</button>
	</>


}