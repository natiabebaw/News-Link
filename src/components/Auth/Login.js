import React, { useState } from 'react';
import UseFormValidation from './useFormValidation'

const INITIAL_STATE = {
	name: '',
	email: '',
	password: '',
};

const Login = () => {

    const { handleSubmit, handleChange, values } = UseFormValidation(INITIAL_STATE);
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
					type="email"
					name="email"
					value={values.email}
					placeholder="Your email"
					autoComplete="off"
				/>
				<input
					onChange={handleChange}
					type="password"
					name="password"
					value={values.password}
					placeholder={login ? 'Your password' : 'Choose a secure password '}
				/>

				<div>
					<button type="submit" className="button pointer mr2">
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
