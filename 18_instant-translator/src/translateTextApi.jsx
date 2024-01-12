import axios from 'axios';

export const useTranslateTextApi = () => {
	const translateTextApi = async (text, targetLang, sourceLang) => {
		const backendUrl = 'http://localhost:5000';
		const authKey = process.env.REACT_APP_DEEPL_AUTH_KEY;

		try {
			const response = await axios.post(
				`${backendUrl}/translate`,
				{
					text: text,
					targetLang: targetLang,
					sourceLang: sourceLang,
				},
				{
					headers: {
						Authorization: `DeepL-Auth-Key ${authKey}`,
						'Content-Type': 'application/json',
					},
				}
			);

			return response.data.translatedText;
		} catch (error) {
			console.error('Erreur lors de la traduction:', error);
			return '';
		}
	};

	return translateTextApi;
};
