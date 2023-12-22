const axios = require('axios');
const fs = require('fs');

const fetchRepos = async () => {
	try {
		const response = await axios.get(
			'https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=10'
		);

		const repos = response.data.items.map((repo) => ({
			name: repo.name,
			url: repo.html_url,
			description: repo.description,
			stars: repo.stargazers_count,
		}));

		fs.writeFileSync(
			'repos.json',
			JSON.stringify(repos, null, 2),
			(err) => {
				if (err) {
					console.error('Oups, une erreur est survenue : ', err);
				} else {
					console.log(
						'Les données ont été sauvegardées dans repos.json'
					);
				}
			}
		);
	} catch (error) {
		console.error('Oups, une erreur est survenue : ', error);
	}
};

fetchRepos();
