require('dotenv').config();
const axios = require('axios');
const fs = require('fs');

const apiKey = process.env.API_KEY;
const lat = 48.8534; // Latitude pour Paris
const lon = 2.3488; // Longitude pour Paris

// Génère les dates pour les 50 derniers étés
const dates = [];
for (let i = 0; i < 50; i++) {
	const date = new Date();
	date.setFullYear(new Date().getFullYear() - i);
	date.setMonth(5); // Juin
	date.setDate(21);
	date.setHours(0, 0, 0, 0);
	const timestamp = Math.floor(date.getTime() / 1000);
	dates.push(timestamp);
}

const getHistoricalWeather = async (date) => {
	const url = `https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${date}&appid=${apiKey}`;
	try {
		const response = await axios.get(url);
		const data = response.data;

		// Convertit le timestamp Unix en date lisible pour nommer le fichier
		const dateString = new Date(date * 1000).toISOString().split('T')[0]; // Donne une date comme "2023-06-21"

		// Stocke les données dans un fichier
		fs.writeFileSync(
			`data/weatherData_${dateString}.json`,
			JSON.stringify(data, null, 2),
			'utf-8'
		);
	} catch (error) {
		console.error(`Oups, il y a eu un problème: ${error}`);
	}
};

// Boucle sur les dates et récupère les données
dates.forEach((date) => {
	getHistoricalWeather(date);
});
