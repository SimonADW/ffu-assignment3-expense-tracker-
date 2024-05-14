
import styles from "./ExpenseForm.module.css";
import closeImage from "../../assets/close.svg";
import { useState } from "react";


export default function ExpenseForm({formStateSetter, handleExpense, getTodaysDate}) {
	const [formErrors, setFormErrors] = useState({amountError: "", titleError: ""});
	const [formValues, setFormValues] = useState({amount: "", title: "", date: "", category: "other"})
		
	function createExpense(amount, title, date, category) {
		return {
			amount: amount, 
			title: title,
			category: category,
			id: Date.now(),
			expenseDate: date
		}
	}

	
	function handleSubmit() {
		const { amount, title, date, category } = formValues;
		const expense = createExpense(amount, title, date, category) 
		handleExpense(expense)		
	}

	const handleChange = (event)=> {
		const { name, value } = event.target
		setFormErrors((prev)=> ({...prev, [`${name}Error`]:""}))
		setFormValues({
			...formValues,
			[name]: value
		})		
	}

	// FORM VALIDATION
	function validateForm(event) {		
		event.preventDefault();
		let isValid = true;
		const clondedErrors = {...formErrors};
		if(!formValues.amount.trim()) {
			clondedErrors.amountError = "Amount is required";
			isValid = false;
		} else if(formValues.amount.trim().length > 8) {
			clondedErrors.amountError = "Max amount is 999.999,-";
			isValid = false;
		}
		
		if(!formValues.title.trim()) {
			clondedErrors.titleError = "Title is required";
			isValid = false;
		} else if(formValues.title.trim().length > 20) {
			clondedErrors.titleError = "Max characters exceeded";
			isValid = false;
		}

		if(!formValues.date.trim()) {
			clondedErrors.dateError = "Date is required";
			isValid = false;
		}

		setFormErrors(clondedErrors);
		isValid && handleSubmit();
	}

	return <>
		<form className={styles.expenseForm} onSubmit={validateForm} action="">
			<button type="button" onClick={()=>formStateSetter(false)} className={styles.closeFormButton}><img src={closeImage} alt="" /></button>
			<legend><h3>ADD EXPENSE</h3></legend>
				
			<div>
				<label htmlFor="amount" className={styles.amountLabel}>Expense amount</label>
				<input type="number" onChange={handleChange} value={formValues.amount} name="amount" className="amountInput" tabIndex={1} autoFocus/>
				<div className={styles.errorMessage}>{formErrors.amountError}</div>
			</div>

			<div>
				<label htmlFor="title" className={styles.titleLabel}>Expense title</label>
				<input type="text" onChange={handleChange} value={formValues.title} name="title" className="titleInput" tabIndex={2} />
				<div className={styles.errorMessage}>{formErrors.titleError}</div>
			</div>

			<div>
				<label htmlFor="date" className={styles.titleLabel}>Expense date</label>
				<input type="date" onChange={handleChange} value={formValues.date} name="date" className="dateInput" tabIndex={3} />
				<div className={styles.errorMessage}>{formErrors.dateError}</div>
			</div>


			<div>
				<label htmlFor="category" className={styles.categoryLabel}>Expense Category</label>
				<select name="category" id="" onChange={handleChange} className="categoryInput" tabIndex={4}>
					<option value="groceries">Groceries</option>
					<option value="housing">Housing</option>
					<option value="transportation">Transportation</option>
					<option value="clothing">Clothing</option>
					<option value="other" selected >Other</option>
				</select>
			</div>

			<button type="submit" className={styles.submitExpenseButton}>Submit Expense</button>		
		</form>
	</>
}