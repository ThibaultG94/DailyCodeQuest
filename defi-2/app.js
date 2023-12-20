const express = require('express');
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

app.get('/generate-token', (req, res) => {
	const token = jwt.sign({ username: 'johndoe' }, process.env.JWT_SECRET, {
		expiresIn: '1h',
	});
	res.status(200).json({ token });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Listening on port http://localhost:${port}`);
});

client.on('error', (error) => {
	console.log(error);
});

(async () => {
	await client.connect();
})();
