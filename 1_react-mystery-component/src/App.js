import React, { useState } from 'react';

const App = () => {
	const [mystery, setMystery] = useState('?');
	const [lastMessage, setLastMessage] = useState('');
	const messages = [
		"Ce n'est pas un bug, c'est une fonctionnalité secrète.",
		'01001000 01101001 01100100 01100100 01100101 01101110',
		'La réponse est dans le code.',
		'Follow the white <div>.',
		'Cherche le commit perdu.',
	];

	const generateMysteryMessage = () => {
		let newMessage;
		do {
			newMessage = messages[Math.floor(Math.random() * messages.length)];
		} while (newMessage === lastMessage);
		setMystery(newMessage);
		setLastMessage(newMessage);
	};

	return (
		<div className="flex h-screen w-full">
			<div className="bg-box-color border m-auto pt-32 relative rounded-lg w-custom-box h-96">
				<div className="bg-black font-roboto-mono  m-auto text-green-400 text-lg h-12 w-custom-message flex items-center justify-center">
					<span>{mystery}</span>
				</div>
				<button
					className="absolute bg-red-500 bottom-4 p-2 right-4 rounded-full shadow-lg hover:bg-red-600 transition-colors duration-300 text-white flex items-center justify-center h-12 w-12"
					onClick={generateMysteryMessage}></button>
			</div>
		</div>
	);
};

export default App;
