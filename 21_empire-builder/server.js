const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

const server = app.listen(5000, () =>
	console.log('Jeu lancé sur le port 5000')
);
