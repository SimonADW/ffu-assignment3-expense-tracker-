import styles from "./ExpenseForm.module.css"
import closeImage from "../../assets/close.svg"

export default function ExpenseForm() {

	return <>
		<form className={styles.expenseForm} action="">
		<button className={styles.closeFormButton}><img src={closeImage} alt="" /></button>
			<legend>ADD EXPENSE</legend>
				
			<div>
				<label htmlFor="amount" className={styles.amountLabel}>Expense amount</label>
				<input type="text" name="amount"/>
			</div>

			<div>
				<label htmlFor="title" className={styles.titleLabel}>Expense title</label>
				<input type="text" name="title" />
			</div>

			<div>
				<label htmlFor="category" className={styles.categoryLabel}>Expense Category</label>
				<select name="category" id="">
					<option value="groceries">Groceries</option>
					<option value="housing">Housing</option>
					<option value="transportation">Transportation</option>
					<option value="clothing">Clothing</option>
					<option value="other">Other</option>
				</select>
			</div>

			<button className={styles.submitExpenseButton}>Submit Expense</button>		
		</form>
	</>
}