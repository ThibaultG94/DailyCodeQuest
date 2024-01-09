const bounceSound = new Audio('./assets/sounds/Boing.wav');
const fastBounceSound = new Audio('./assets/sounds/Ricochet.wav');
export const byeBallSound = new Audio('./assets/sounds/Byeball.wav');
bounceSound.volume = 0.1;
fastBounceSound.volume = 0.1;
byeBallSound.volume = 0.1;

export const playBounceSound = (ball) => {
	const speed = Math.sqrt(
		ball.speedX * ball.speedX + ball.speedY * ball.speedY
	);

	const soundToPlay = speed > 30 ? fastBounceSound : bounceSound;

	if (soundToPlay.paused) {
		soundToPlay
			.play()
			.catch((e) =>
				console.log('Erreur lors de la lecture du son : ', e)
			);
	} else {
		soundToPlay.currentTime = 0; // Rewind au début si le son jouait déjà
	}
};

export const playByeBallSound = () => {
	if (byeBallSound.paused) {
		byeBallSound
			.play()
			.catch((e) =>
				console.log('Erreur lors de la lecture du son : ', e)
			);
	}
};
