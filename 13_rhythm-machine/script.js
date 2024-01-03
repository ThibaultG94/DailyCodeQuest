let samples = {};
let audioSources = {};
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

const loadAudioFile = async (url) => {
	const response = await fetch(url);
	const arrayBuffer = await response.arrayBuffer();
	const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
	return audioBuffer;
};

const playSound = (buffer, loop = false) => {
	const source = audioContext.createBufferSource();
	const gainNode = audioContext.createGain();

	source.buffer = buffer;
	source.loop = loop;
	source.connect(gainNode).connect(audioContext.destination);
	source.start(0);

	return { source, gain: gainNode };
};

const startLoop = async (category, soundFileName) => {
	const buffer = await loadAudioFile(
		`samples/${category}/${soundFileName}.wav`
	);
	const source = playSound(buffer, true);
	audioSources[category] = source;
};

const stopLoop = (category) => {
	if (audioSources[category]) {
		audioSources[category].source.stop();
		delete audioSources[category];
	}
};

const playRandomSound = async (category) => {
	if (!samples[category]) {
		console.error('Samples not loaded yet!');
		return;
	}
	const sounds = samples[category];
	const randomSoundFile = sounds[Math.floor(Math.random() * sounds.length)];
	const buffer = await loadAudioFile(
		`samples/${category}/${randomSoundFile}.wav`
	);
	playSound(buffer);
};

fetch('samples.json')
	.then((response) => response.json())
	.then((data) => {
		samples = data;
		document.querySelectorAll('.drum-pad').forEach((pad) => {
			pad.addEventListener('click', () => playRandomSound(pad.id));
		});
	})
	.catch((error) => {
		console.error('Error loading samples:', error);
	});

document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('.start-loop').forEach((button) => {
		button.addEventListener('click', (e) => {
			e.stopPropagation();
			const category = button.getAttribute('data-sound');
			const sounds = samples[category];
			const randomSoundFile =
				sounds[Math.floor(Math.random() * sounds.length)];
			startLoop(category, randomSoundFile);
		});
	});

	document.querySelectorAll('.stop-loop').forEach((button) => {
		button.addEventListener('click', (e) => {
			e.stopPropagation();
			const category = button.getAttribute('data-sound');
			stopLoop(category);
		});
	});
});

document.getElementById('volume').addEventListener('input', (e) => {
	const volumeValue = e.target.value;
	for (let source in audioSources) {
		if (audioSources.hasOwnProperty(source)) {
			audioSources[source].gain.gain.value = volumeValue;
		}
	}
});
