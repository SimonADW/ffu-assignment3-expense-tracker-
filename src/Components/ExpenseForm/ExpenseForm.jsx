
import styles from "./ExpenseForm.module.css";
import closeImage from "../../assets/close.svg";
import useForm from "../useForm";
import validate from "../validateLogin";
import { useState } from "react";


export default function ExpenseForm({formStateSetter, handleExpense}) {
	const [formErrors, setFormErrors] = useState({amountError: "", titleError: ""});
	const [formValues, setFormValues] = useState({amount: "", title: "", category: ""})
	const [isValidated, setIsValidated] = useState(true);
	
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
		setFormErrors((prev)=> ({...prev, [`${name}Error`]:""}))
		setFormValues({
			...formValues,
			[name]: value
		})
	}

	// FORM VALIDATION
	function validateForm(event) {
		let isValid = true;
		let clonedErrors = {...formErrors}
		event.preventDefault();
		if(!formValues.amount.trim()) {
			clonedErrors.amountError = "Amount is required";
			isValid = false;
		} else if (formValues.amount.trim().length > 6) {			
			clonedErrors.amountError = "Max amount is 999.999,-"
			isValid = false;			
		}
		
		if(!formValues.title.trim()) {
			clonedErrors.titleError = "Title is required";
			isValid = false;			
		} else if(formValues.title.trim().length > 20){
			clonedErrors.titleError = "Max characters is 20";
			isValid = false;			
		}
		setFormErrors(clonedErrors);
		setIsValidated(isValid);
		isValid && handleSubmit(event);
	}

	return <>
		<form className={styles.expenseForm} onSubmit={validateForm} action="">
		<button onClick={()=>formStateSetter(false)} className={styles.closeFormButton}><img src={closeImage} alt="" /></button>
			<legend><h3>ADD EXPENSE</h3></legend>
				
			<div>
				<label htmlFor="amount" className={styles.amountLabel}>Expense amount</label>
				<input type="number" onChange={handleChange} value={formValues.amount} name="amount" className="amountInput" tabIndex={1} autoFocus/>
				<p className={styles.errorMessage}>{formErrors.amountError}</p>
			</div>

			<div>
				<label htmlFor="title" className={styles.titleLabel}>Expense title</label>
				<input type="text" onChange={handleChange} value={formValues.title} name="title" className="titleInput" tabIndex={2} />
				<p className={styles.errorMessage}>{formErrors.titleError}</p>
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

			<button className={styles.submitExpenseButton}>Submit Expense</button>		
		</form>
	</>
}