const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
let activeOscillator = null;

export const playNote = (frequency) => {
	if (activeOscillator) {
		activeOscillator.stop();
		activeOscillator.disconnect();
	}

	const oscillator = audioCtx.createOscillator();
	oscillator.type = 'sine';
	oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);
	oscillator.connect(audioCtx.destination);
	oscillator.start();
	oscillator.stop(audioCtx.currentTime + 0.5);
};

export const stopNote = () => {
	if (activeOscillator) {
		activeOscillator.stop();
		activeOscillator.disconnect();
		activeOscillator = null;
	}
};
