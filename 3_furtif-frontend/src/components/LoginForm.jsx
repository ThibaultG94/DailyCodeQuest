import React, { useState } from 'react';
import { loginUser } from './loginUser';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const token = await loginUser(email, password);
		if (token) {
			navigate('/secure-data');
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Email"
					type="email"
					value={email}
				/>
				<input
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Mot de passe"
					type="password"
					value={password}
				/>
				<button type="submit">Se connecter</button>
			</form>
		</div>
	);
};

export default LoginForm;
