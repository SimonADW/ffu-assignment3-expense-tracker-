import { useState } from "react";
import styles from "./ExpenseForm.module.css"
import closeImage from "../../assets/close.svg"

export default function ExpenseForm({formStateSetter, handleExpense, expenses}) {
	const [formError, setFormError] = useState();
	const [formValues, setFormValues] = useState({amount: "", title: "", category: ""})
	
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

	function handleSubmit(event) {
		const expense = new CreateExpense(event.target[1].value, event.target[2].value, event.target[3].value) 
		handleExpense(expense)
	}

	const handleChange = (event)=> {
		const { name, value } = event.target
		setFormValues({
			...formValues,
			[name]: value
		})
	}

	// FORM VALIDATION
	function validateForm(event) {
		event.preventDefault();
		const amountInput = event.target[1].value
		const titleInput = event.target[2].value
		let isValidated = true;

		if(!amountInput && !titleInput) {
			isValidated = false
			setFormError("Please enter amount and title")

		} else if (!titleInput) {
			isValidated = false			
			setFormError("Please enter title")			
		} else if(!amountInput) {
			setFormError("Please enter amount")
			isValidated = false			
		} else {
			isValidated = true
			setFormError("")
		}
		
		if (isValidated) {
			handleSubmit(event)
		}
	}

	return <>
		<form className={styles.expenseForm} onSubmit={validateForm} action="">
		<button onClick={()=>formStateSetter(false)} className={styles.closeFormButton}><img src={closeImage} alt="" /></button>
			<legend><h3>ADD EXPENSE</h3></legend>
				
			<div>
				<label htmlFor="amount" className={styles.amountLabel}>Expense amount</label>
				<input type="number" onChange={handleChange} value={formValues.amount} name="amount" className="amountInput" tabIndex={1} autoFocus/>
			</div>

			<div>
				<label htmlFor="title" className={styles.titleLabel}>Expense title</label>
				<input type="text" onChange={handleChange} value={formValues.title} name="title" className="titleInput" tabIndex={2} />
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

			<div className={styles.errorMessage}>{formError}</div>

			<button className={styles.submitExpenseButton}>Submit Expense</button>		
		</form>
	</>
}