const decodeCaesarCipher = (str, shift) => {
	const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
	const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	let decoded = '';

	for (let char of str) {
		let position;
		if (upperAlphabet.includes(char)) {
			position = upperAlphabet.indexOf(char) - shift;
			while (position < 0) position += 26;
			decoded += upperAlphabet[position];
		} else if (lowerAlphabet.includes(char)) {
			position = lowerAlphabet.indexOf(char) - shift;
			while (position < 0) position += 26;
			decoded += lowerAlphabet[position];
		} else {
			decoded += char;
		}
	}

	return decoded;
};

const encodeCaesarCipher = (str, shift) => {
	const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
	const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	let encoded = '';

	for (let char of str) {
		let position;
		if (upperAlphabet.includes(char)) {
			position = (upperAlphabet.indexOf(char) + shift) % 26;
			encoded += upperAlphabet[position];
		} else if (lowerAlphabet.includes(char)) {
			position = (lowerAlphabet.indexOf(char) + shift) % 26;
			encoded += lowerAlphabet[position];
		} else {
			encoded += char;
		}
	}

	console.log(encoded);
	return encoded;
};

const isValidInput = (str) => {
	return /^[a-zA-Z\s]*$/.test(str);
};

const decodeMessage = () => {
	const message = document.getElementById('messageInput').value;
	const shift = parseInt(document.getElementById('shiftInput').value);
	if (!isValidInput(message)) {
		alert('Entrez uniquement des lettres et des espaces.');
		return;
	}
	const resultElement = document.getElementById('result');
	const decodedMessage = decodeCaesarCipher(message, shift);
	resultElement.innerText = `Message décodé : ${decodedMessage}`;
	resultElement.style.visibility = 'visible';
	document.getElementById('codeInput').value = decodedMessage;
};

const encodeMessage = () => {
	const message = document.getElementById('codeInput').value;
	const shift = parseInt(document.getElementById('shiftInput').value);
	const encodedResultElement = document.getElementById('encodedResult');

	if (!isValidInput(message)) {
		alert('Entrez uniquement des lettres et des espaces.');
		return;
	}

	const encodedMessage = encodeCaesarCipher(message, shift);
	encodedResultElement.innerText = `Message codé : ${encodedMessage}`;
	encodedResultElement.style.visibility = 'visible';
};

document
	.getElementById('decodeButton')
	.addEventListener('click', decodeMessage);
document
	.getElementById('encodeButton')
	.addEventListener('click', encodeMessage);
