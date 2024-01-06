function transformData(data) {
	return data.map((yearData) => {
		const date = new Date(yearData.data[0].dt * 1000);
		const temperature = yearData.data[0].temp - 273.15;
		console.log(date, temperature); // Ajoute ceci pour vérifier les valeurs
		return { date, temperature };
	});
}

// Une fonction pour charger les données
async function loadAndProcessData() {
	// Charge les données combinées
	const response = await fetch('data/combinedWeatherData.json');
	const data = await response.json();

	// Logique de traitement et de visualisation des données
	const transformedData = transformData(data);
	console.log(transformedData);
	visualizeData(transformedData);
}

function visualizeData(transformedData) {
	const svg = d3
		.select('#graph')
		.append('svg')
		.attr('width', 800)
		.attr('height', 600);

	const margin = { top: 10, right: 30, bottom: 30, left: 60 },
		width = 800 - margin.left - margin.right,
		height = 600 - margin.top - margin.bottom;

	const x = d3
		.scaleTime()
		.domain(d3.extent(transformedData, (d) => d.date)) // Utilise d.date
		.range([0, width]);

	const y = d3
		.scaleLinear()
		.domain(d3.extent(transformedData, (d) => d.temperature)) // Utilise d.temperature
		.range([height, 0]);

	svg.append('g')
		.attr('transform', `translate(${margin.left},${height + margin.top})`)
		.call(d3.axisBottom(x));

	svg.append('g')
		.attr('transform', `translate(${margin.left},${margin.top})`)
		.call(d3.axisLeft(y));

	svg.append('path')
		.datum(transformedData) // Utilise transformedData au lieu de data
		.attr('fill', 'none')
		.attr('stroke', 'steelblue')
		.attr('stroke-width', 1.5)
		.attr(
			'd',
			d3
				.line()
				.x((d) => x(d.date)) // Utilise d.date
				.y((d) => y(d.temperature)) // Utilise d.temperature
		)
		.attr('transform', `translate(${margin.left},${margin.top})`);
}

loadAndProcessData();
