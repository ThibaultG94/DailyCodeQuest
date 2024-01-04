const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const mediaStreamDestination = audioContext.createMediaStreamDestination();
const beatsPerLoop = 16;
const sequencerRows = document.querySelectorAll('.sequencer-row');
const BPM = 120;
let samples = {};
let audioSources = {};
let mediaRecorder;
let audioChunks = [];
let recordedAudio = null;
let currentBeat = 0;

const loadAllSamples = async () => {
	const categories = Object.keys(samples);
	const loadPromises = [];

	for (const category of categories) {
		samples[category].buffers = {};
		for (const soundName of samples[category]) {
			const soundPath = `samples/${category}/${soundName}.wav`;
			loadPromises.push(
				loadAudioFile(soundPath).then((buffer) => {
					samples[category].buffers[soundName] = buffer;
				})
			);
		}
	}

	await Promise.all(loadPromises);
};

fetch('samples.json')
	.then((response) => response.json())
	.then((data) => {
		samples = data;
		return loadAllSamples();
	})
	.then(() => {
		document.querySelectorAll('.drum-pad').forEach((pad) => {
			pad.addEventListener('click', () => playRandomSound(pad.id));
		});
	})
	.catch((error) => {
		console.error('Error loading samples:', error);
	});

const loadAudioFile = async (url) => {
	const response = await fetch(url);
	const arrayBuffer = await response.arrayBuffer();
	const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
	return audioBuffer;
};

const playSound = (category, soundName, loop = false) => {
	const buffer = samples[category].buffers[soundName];

	if (buffer) {
		const source = audioContext.createBufferSource();
		const gainNode = audioContext.createGain();
		gainNode.connect(audioContext.destination);

		source.buffer = buffer;
		source.loop = loop;
		source.connect(gainNode).connect(mediaStreamDestination);
		source.start(0);

		return { source, gain: gainNode };
	} else {
		console.error('Sample not found: ', category, soundName);
	}
};

const startLoop = async (category, soundFileName) => {
	const buffer = await loadAudioFile(
		`samples/${category}/${soundFileName}.wav`
	);
	const source = playSound(category, soundFileName, true);
	audioSources[category] = source;
};

const stopLoop = (category) => {
	if (audioSources[category]) {
		audioSources[category].source.stop();
		delete audioSources[category];
	}
};

const playSequencerSound = (category, cellIndex) => {
	const soundNames = Object.keys(samples[category].buffers);
	if (soundNames.length > 0) {
		const soundName = soundNames[cellIndex % soundNames.length];
		playSound(category, soundName);
	}
};

const playRandomSound = async (category) => {
	if (!samples[category] || !samples[category].buffers) {
		console.error('Samples not loaded yet!');
		return;
	}
	const soundNames = Object.keys(samples[category].buffers);
	const randomSoundIndex = Math.floor(Math.random() * soundNames.length);
	const randomSoundName = soundNames[randomSoundIndex];
	playSound(category, randomSoundName);
};

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

const initRecorder = () => {
	mediaRecorder = new MediaRecorder(mediaStreamDestination.stream);
	mediaRecorder.addEventListener('dataavailable', (e) => {
		audioChunks.push(e.data);
	});
	mediaRecorder.addEventListener('stop', () => {
		const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
		const audioUrl = URL.createObjectURL(audioBlob);
		const downloadLink = document.createElement('a');
		recordedAudio = new Audio(audioUrl);
		downloadLink.href = audioUrl;
		downloadLink.download = 'recording.wav';
		downloadLink.textContent = 'Download recording';
		document.body.appendChild(downloadLink);
		downloadLink.click();
		downloadLink.remove();
	});
};

const startRecording = () => {
	audioChunks = [];
	mediaRecorder.start();
};

const stopRecording = () => {
	mediaRecorder.stop();
};

const playRecordedAudio = () => {
	if (recordedAudio) {
		recordedAudio.play();
	}
};

const stopRecordedAudio = () => {
	if (recordedAudio) {
		recordedAudio.pause();
		recordedAudio.currentTime = 0;
	}
};

document.addEventListener('DOMContentLoaded', () => {
	initRecorder();

	const recordButton = document.getElementById('record');
	const stopButton = document.getElementById('stop');

	recordButton.addEventListener('click', () => {
		startRecording();
		recordButton.classList.add('hidden');
		stopButton.classList.remove('hidden');
	});

	stopButton.addEventListener('click', () => {
		stopRecording();
		stopButton.classList.add('hidden');
		recordButton.classList.remove('hidden');
	});
});

sequencerRows.forEach((row) => {
	for (let i = 0; i < beatsPerLoop; i++) {
		const cell = document.createElement('div');
		cell.classList.add('cell');
		row.appendChild(cell);
	}
});

sequencerRows.forEach((row) => {
	row.childNodes.forEach((cell) => {
		cell.addEventListener('click', () => {
			cell.classList.toggle('active');
		});
	});
});

setInterval(() => {
	sequencerRows.forEach((row) => {
		const category = row.dataset.sound;
		const cell = row.children[currentBeat];
		if (cell.classList.contains('active')) {
			playSequencerSound(category, currentBeat);
		}
	});
	currentBeat = (currentBeat + 1) % beatsPerLoop;
}, 60000 / BPM);
