import { useState } from "react";

const useForm = (callback, validate)=> {
	const [formValues, setFormValues] = useState({amount: "", title: "", category: ""})
	const [formErrors, setFormErrors] = useState({amount: "", title: "", category: ""});

	// Function that validates errors
	// pass errors back to forms

	const handleChange = (event)=> {
		const { name, value } = event.target
		setFormValues({
			...formValues,
			[name]: value
		})
	}

	function handleSubmit() {
		setFormErrors(validate(formValues))
		// callback(expense)
	}

	return {
		handleChange,
		handleSubmit, 
		formValues, 
		formErrors
	}
}


export default useForm