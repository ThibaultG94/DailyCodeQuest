import axios from 'axios';

export const getSecureData = async () => {
	try {
		const token = localStorage.getItem('token');
		const response = await axios.get(
			'http://localhost:5500/api/secure-data',
			{
				headers: {
					Authorization: `${token}`,
				},
			}
		);
		return response.data.secretData;
	} catch (error) {
		console.error(
			'Erreur lors de la récupération des données sécurisées',
			error
		);
	}
};
