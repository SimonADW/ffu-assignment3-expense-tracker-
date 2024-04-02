

export default function validate(values) {
	let errors = {}
	
	if (!values.amount) {
		errors.amount = "Please set amount"	
	} 
	
	if (!values.title) {
		errors.title = "Please provide a title for the expense"
	}

	return errors
} 