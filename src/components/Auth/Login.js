import React, { useState } from 'react';
import useFormValidation from './useFormValidation';
import validateLogin from './validateLogin';

const INITIAL_STATE = {
	name: '',
	email: '',
	password: '',
};

const Login = () => {
	const {
		handleSubmit,
		handleBlur,
		handleChange,
		values,
		errors,
		isSubmitting,
	} = useFormValidation(INITIAL_STATE, validateLogin);
	const [login, setLogin] = useState(true);

	return (
		<div>
			<h2 className="mv3">{login ? 'Login' : 'Create Account'}</h2>

			<form onSubmit={handleSubmit} className="flex flex-column">
				{!login && (
					<input
						onChange={handleChange}
						type="text"
						name="name"
						value={values.name}
						placeholder="Your name"
						autoComplete="off"
					/>
				)}
				<input
					onChange={handleChange}
					onBlur={handleBlur}
					type="email"
					name="email"
					className={errors.email && 'error-input'}
					value={values.email}
					placeholder="Your email"
					autoComplete="off"
				/>
				{errors.email && <p className="error-text">{errors.email}</p>}
				<input
					onChange={handleChange}
					onBlur={handleBlur}
					type="password"
					name="password"
					className={errors.password && 'error-input'}
					value={values.password}
					placeholder={login ? 'Your password' : 'Choose a secure password '}
				/>
				{errors.password && <p className="error-text">{errors.password}</p>}
				<div>
					<button
						type="submit"
						className="button pointer mr2"
						disabled={isSubmitting}
						style={{ background: isSubmitting ? 'grey' : 'orange' }}
					>
						Submit
					</button>
					<button
						type="button"
						className="button pointer"
						onClick={() => setLogin((prev) => !prev)}
					>
						{login ? 'need to create an account?' : 'already have an account?'}
					</button>
				</div>
			</form>
		</div>
	);
};

export default Login;
