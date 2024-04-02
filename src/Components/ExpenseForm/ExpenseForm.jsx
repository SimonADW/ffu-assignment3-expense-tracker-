
import styles from "./ExpenseForm.module.css";
import closeImage from "../../assets/close.svg";
import useForm from "../useForm";
import validate from "../validateLogin";

export default function ExpenseForm({formStateSetter, handleExpense}) {
	console.log(formStateSetter);
	// const [handleChange, handleSubmit, formValues, formErrors] = useForm(submit(event), validate)
	
	function CreateExpense(amount, title, category) {
		this.amount = amount, 
		this.title = title,
		this.category = category,
		this.id = Date.now()
		this.getDate = function() {
			const dateObject = new Date();
			const year = dateObject.getFullYear().toString();
			const month = dateObject.getMonth() + 1;
			const monthPadded = month.toString().padStart(2, 0)
			const date = dateObject.getDate().toString();
			return `${year}-${monthPadded}-${date}`;
		}
	}

	function submit(event) {
		const expense = new CreateExpense(event.target[1].value, event.target[2].value, event.target[3].value) 
		handleSubmit()
		handleExpense(expense)
	}


	return <>
		<form className={styles.expenseForm} onSubmit={validate} action="">
		<button onClick={()=>formStateSetter(false)} className={styles.closeFormButton}><img src={closeImage} alt="" /></button>
			<legend><h3>ADD EXPENSE</h3></legend>
				
			<div>
				<label htmlFor="amount" className={styles.amountLabel}>Expense amount</label>
				<input type="number" name="amount" onChange={handleChange} value={formValues.amount} name="amount" className="amountInput" tabIndex={1} autoFocus/>
				{formErrors.amount && <p>{formErrors.amount}</p>}
			</div>

			<div>
				<label htmlFor="title" className={styles.titleLabel}>Expense title</label>
				<input type="text" name="title" onChange={handleChange} value={formValues.title} name="title" className="titleInput" tabIndex={2} />
				{formErrors.title && <p>{formErrors.title}</p>}
			</div>

			<div>
				<label htmlFor="category" className={styles.categoryLabel}>Expense Category</label>
				<select name="category" id="" onChange={handleChange} className="categoryInput" tabIndex={3}>
					<option value="groceries">Groceries</option>
					<option value="housing">Housing</option>
					<option value="transportation">Transportation</option>
					<option value="clothing">Clothing</option>
					<option value="other">Other</option>
				</select>
			</div>

			<div className={styles.errorMessage}></div>

			<button className={styles.submitExpenseButton}>Submit Expense</button>		
		</form>
	</>
}