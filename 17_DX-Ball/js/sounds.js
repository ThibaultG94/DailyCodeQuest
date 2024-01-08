const bounceSound = new Audio('../assets/sounds/Boing.wav');

export const playBounceSound = () => {
	if (bounceSound.paused) {
		bounceSound.play();
	} else {
		bounceSound.currentTime = 0; // Rewind au début si le son jouait déjà
	}
};
