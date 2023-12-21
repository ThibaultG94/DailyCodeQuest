const express = require('express');
const cors = require('cors');
const authMiddleware = require('./auth.middleware');
const app = express();
const jwt = require('jsonwebtoken');
const fs = require('fs');
const redis = require('redis');
const client = redis.createClient({
	socket: {
		host: '127.0.0.1',
		port: 6379,
	},
});

app.use(cors());
app.use(express.json());

require('dotenv').config();

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/api/secure-data', authMiddleware, async (req, res) => {
	try {
		const data = await client.get('secretData');
		if (data) {
			res.json({ secretData: data });
		} else {
			res.status(404).json({ message: 'Not found' });
		}
	} catch (err) {
		res.status(500).json({ message: 'Something went wrong', error: err });
	}
});

app.post('/login/generate-token', (req, res) => {
	const { email, password } = req.body;

	const isEmailValid =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
			email
		);
	const isPasswordValid = password && password.length > 0;

	if (!isEmailValid) {
		return res.status(400).json({ error: 'Email invalide', isEmailValid });
	}

	if (!isPasswordValid) {
		return res
			.status(400)
			.json({ error: 'Mot de passe invalide', isPasswordValid });
	}

	if (!isEmailValid || !isPasswordValid) {
		return res
			.status(400)
			.json({ error: 'Email ou mot de passe invalide' });
	}

	const token = jwt.sign({ email }, process.env.JWT_SECRET, {
		expiresIn: '1h',
	});
	res.status(200).json({ token });
});

const port = process.env.PORT || 5500;
app.listen(port, () => {
	console.log(`Listening on port http://localhost:${port}`);
});

client.on('error', (error) => {
	console.log(error);
});

(async () => {
	await client.connect();
})();
