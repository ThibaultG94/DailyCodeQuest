import axios from 'axios';

export const loginUser = async (email, password) => {
	try {
		const response = await axios.post(
			'http://localhost:5500/login/generate-token',
			{
				email,
				password,
			}
		);
		const token = response.data.token;
		localStorage.setItem('token', token);
		return token;
	} catch (error) {
		console.error('Erreur de connexion', error);
	}
};
