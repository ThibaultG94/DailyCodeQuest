const formQuestion = document.getElementById('formQuestion');

let keywords = {};
let responses = {};

const loadData = async () => {
	try {
		const keywordsResponse = await fetch('keywords.json');
		keywords = await keywordsResponse.json();
		console.log('Mots-clés chargés:', keywords);

		const responsesResponse = await fetch('responses.json');
		responses = await responsesResponse.json();
		console.log('Réponses chargées:', responses);

		formQuestion.addEventListener('submit', formSubmitHandler);
	} catch (error) {
		console.error('Erreur de chargement des données:', error);
	}
};

const findKeyword = (input) => {
	let foundKeyword = '';
	const normalizedInput = input.toLowerCase().trim().replace(/[?!.]/g, '');
	if (keywords[normalizedInput]) {
		return normalizedInput;
	}
	Object.keys(keywords).some((key) => {
		const synonyms = keywords[key];
		return synonyms.some((synonym) => {
			if (key === synonym.toLowerCase()) {
				foundKeyword = key;
				return true;
			}
			return false;
		});
	});
	return foundKeyword;
};

const checkRepeat = (message, keyword) => {
	const normalizedMessage = keyword.toLowerCase().trim();
	const hasAskedBefore = localStorage.getItem(normalizedMessage);
	localStorage.setItem(normalizedMessage, true);

	if (responses[keyword]) {
		if (hasAskedBefore) {
			return responses[keyword].repeat;
		} else {
			return responses[keyword].firstTime;
		}
	} else {
		return 'Désolé bro, je ne capte pas ce que tu veux dire.';
	}
};

const getResponse = (message) => {
	const lowerInput = message.toLowerCase().trim();
	let response = 'Désolé bro, je ne capte pas ce que tu veux dire.';

	const keyword = findKeyword(lowerInput);
	if (keyword) {
		response = checkRepeat(message, keyword);
	}

	return response;
};

const formSubmitHandler = (e) => {
	e.preventDefault();
	const question = document.getElementById('question').value;
	const chatWindow = document.getElementById('chat-window');

	// Ajoute la question de l'utilisateur
	const userDiv = document.createElement('div');
	userDiv.classList.add('message', 'user-message');
	userDiv.textContent = question;
	chatWindow.appendChild(userDiv);

	// Ajoute la réponse du bot
	const response = getResponse(question);
	const botDiv = document.createElement('div');
	botDiv.classList.add('message', 'bot-message');
	botDiv.textContent = response;
	chatWindow.appendChild(botDiv);

	// Nettoie le champ de question et fais défiler le chat vers le bas
	document.getElementById('question').value = '';
	chatWindow.scrollTop = chatWindow.scrollHeight;
};

// Assure-toi d'appeler cette fonction pour initialiser le chatbot
loadData();
