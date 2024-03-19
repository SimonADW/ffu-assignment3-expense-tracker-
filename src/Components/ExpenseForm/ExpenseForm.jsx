import styles from "./ExpenseForm.module.css"

export default function ExpenseForm() {

	return <>
		<div>X</div>
		<form className={styles.expenseForm} action="">
			<legend>Add Expense</legend>
				
			<label htmlFor="amount">Expense amount</label>
			<input type="text" name="amount"/>

			<label htmlFor="title">Expense title</label>
			<input type="text" name="title" />

			<select name="category" id="">
				<option value="groceries">Groceries</option>
				<option value="housing">Housing</option>
				<option value="transportation">Transportation</option>
				<option value="clothing">Clothing</option>
				<option value="other">Other</option>
			</select>

			<button className={styles.submitExpenseButton}>Submit Expense</button>		
		</form>
	</>
}