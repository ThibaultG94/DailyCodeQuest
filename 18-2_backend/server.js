const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios'); // N'oublie pas d'importer axios

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Serveur écoutant sur le port ${port}`);
});

app.post('/translate', async (req, res) => {
	const { text, targetLang, sourceLang } = req.body;
	const authKey = process.env.DEEPL_AUTH_KEY;

	try {
		const response = await axios.post(
			'https://api-free.deepl.com/v2/translate',
			{
				text: [text],
				target_lang: targetLang,
				source_lang: sourceLang,
			},
			{
				headers: {
					Authorization: `DeepL-Auth-Key ${authKey}`,
					'Content-Type': 'application/json',
				},
			}
		);

		console.log(targetLang, sourceLang);
		res.json({ translatedText: response.data.translations[0].text });
	} catch (error) {
		console.error('Erreur lors de la traduction:', error);
		res.status(500).json({ error: 'Erreur lors de la traduction' });
	}
});
