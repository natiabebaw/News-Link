import React from 'react';

function useFormValidation(initialState, validate) {
	const [values, setValues] = React.useState(initialState);
	const [errors, setErrors] = React.useState({});
	const [isSubmitting, setSubmitting] = React.useState(false);

	const handleChange = (event) => {
		event.persist();
		setValues((previousValues) => ({
			...previousValues,
			[event.target.name]: event.target.value,
		}));
	};

	const handleBlur = () => {
		const validationErrors = validate(values);
		setErrors(validationErrors);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		const validationErrors = validate(values);
		setSubmitting(true);
		console.log({ values });
	};

	//return to Login Component
	return {
		handleSubmit,
		handleBlur,
		handleChange,
		values,
		errors,
		isSubmitting,
	};
}

export default useFormValidation;
