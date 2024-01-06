require('dotenv').config();
const axios = require('axios');
const fs = require('fs');

const apiKey = process.env.API_KEY;
const getWeatherData = async () => {
	const url = `http://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${apiKey}&units=metric`;
	try {
		const response = await axios.get(url);
		const data = response.data;
		fs.writeFileSync(
			'weatherData.json',
			JSON.stringify(data, null, 2),
			'utf-8'
		);
	} catch (error) {
		console.error(`Oups, il y a eu un problème: ${error}`);
	}
};

getWeatherData();
