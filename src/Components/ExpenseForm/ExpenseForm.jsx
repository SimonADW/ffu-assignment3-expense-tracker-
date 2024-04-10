
import styles from "./ExpenseForm.module.css";
import closeImage from "../../assets/close.svg";
import { useState } from "react";


export default function ExpenseForm({formStateSetter, handleExpense}) {
	const [formErrors, setFormErrors] = useState({amountError: "", titleError: ""});
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
			const date = dateObject.getDate().toString().padStart(2, 0);
			return `${year}-${monthPadded}-${date}`;
		}
	}

	function handleSubmit(event) {
		const expense = new CreateExpense(event.target[1].value, event.target[2].value, event.target[3].value) 
		handleExpense(expense)
	}

	const handleChange = (event)=> {
		const { name, value } = event.target
		setFormErrors((prev)=> ({...prev, [`${name}Error`]:""}))
		setFormErrors((prev)=> ({...prev, [`${name}Error`]: ""}))
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
		setFormErrors(clondedErrors);
		isValid && handleSubmit(event);
	}

	return <>
		<form className={styles.expenseForm} onSubmit={validateForm} action="">
		<button onClick={()=>formStateSetter(false)} className={styles.closeFormButton}><img src={closeImage} alt="" /></button>
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
				<label htmlFor="category" className={styles.categoryLabel}>Expense Category</label>
				<select name="category" id="" onChange={handleChange} className="categoryInput" tabIndex={3}>
					<option value="groceries">Groceries</option>
					<option value="housing">Housing</option>
					<option value="transportation">Transportation</option>
					<option value="clothing">Clothing</option>
					<option value="other" selected>Other</option>
				</select>
			</div>

			<button className={styles.submitExpenseButton}>Submit Expense</button>		
		</form>
	</>
}