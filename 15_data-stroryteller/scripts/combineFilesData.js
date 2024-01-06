const fs = require('fs');
const path = require('path');

// Dossier contenant tes fichiers JSON
const dataDir = path.join(__dirname, 'data');

// Lire le nom de tous les fichiers dans le dossier
const files = fs.readdirSync(dataDir);

let allWeatherData = [];

files.forEach((file) => {
	if (path.extname(file) === '.json') {
		// Construit le chemin complet du fichier
		const filePath = path.join(dataDir, file);
		// Lit le contenu du fichier
		const fileContent = fs.readFileSync(filePath, 'utf-8');
		// Parse le contenu du fichier et l'ajoute au tableau
		allWeatherData.push(JSON.parse(fileContent));
	}
});

// À ce stade, allWeatherData est un tableau contenant toutes les données météo

// Créer un fichier unique contenant toutes ces données
const allDataPath = path.join(__dirname, 'combinedWeatherData.json');
fs.writeFileSync(allDataPath, JSON.stringify(allWeatherData, null, 2), 'utf-8');

console.log('Toutes les données météo ont été combinées !');
