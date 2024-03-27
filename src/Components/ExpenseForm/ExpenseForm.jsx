import styles from "./ExpenseForm.module.css"
import closeImage from "../../assets/close.svg"

export default function ExpenseForm({formStateSetter, handleExpense, expenses}) {

	function CreateExpense(amount, title, category) {
		this.amount = amount, 
		this.title = title,
		this.category = category,
		this.id = Date.now()
		this.getDate = function() {
			const dateObject = new Date();
			const year = dateObject.getFullYear();
			const month = dateObject.getMonth() + 1;
			const monthPadded = month.toString().padStart(2, 0)
			const date = dateObject.getDate();
			return `${year}-${monthPadded}-${date}`;

		}
	}

	function handleSubmit(event) {
		event.preventDefault();
		const expense = new CreateExpense(event.target[1].value, event.target[2].value, event.target[3].value) 
		handleExpense(expense)
		console.log(expenses);
	}

	return <>
		<form className={styles.expenseForm} onSubmit={handleSubmit} action="">
		<button onClick={()=>formStateSetter(false)} className={styles.closeFormButton}><img src={closeImage} alt="" /></button>
			<legend><h3>ADD EXPENSE</h3></legend>
				
			<div>
				<label htmlFor="amount" className={styles.amountLabel}>Expense amount</label>
				<input type="number" name="amount" className="amountInput" tabIndex={1} autoFocus/>
			</div>

			<div>
				<label htmlFor="title" className={styles.titleLabel}>Expense title</label>
				<input type="text" name="title" className="titleInput" tabIndex={2} />
			</div>

			<div>
				<label htmlFor="category" className={styles.categoryLabel}>Expense Category</label>
				<select name="category" id="" className="categoryInput" tabIndex={3}>
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