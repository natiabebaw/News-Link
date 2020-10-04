import React, {useState} from 'react';

const Login = () => {

    const [login, setLogin] = useState(true);

	return (
		<div>
			<h2 className="mv3">{login ? "Login":"Create Account"}</h2>

			<form className="flex flex-column">
                {!login && (<input 
                    type="text" 
                    placeholder="Your name" 
                    autoComplete="off" />
                )}
                <input 
                    type="email" 
                    placeholder="Your email" 
                    autoComplete="off" />
                <input 
                    type="email" 
                    placeholder={login ? "Your password":"Choose a secure password "} />

                <div>
                    <button type="submit" className="button pointer mr2">Submit</button>
                    <button 
                        type="button" 
                        className="button pointer"
                        onClick={() => setLogin(prev => !prev)}
                        >{login ? "need to create an account?":"already have an account?"}</button>
                </div>
			</form>
		</div>
	);
};

export default Login;
