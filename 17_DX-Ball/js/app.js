import { init } from './gameEngine.js';
import { canvas } from './gameEngine.js';

document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('startButton').addEventListener('click', () => {
		canvas
			.requestFullscreen()
			.then(() => {
				init();
			})
			.catch((err) => {
				console.error(
					`Error trying to enter fullscreen mode: ${err.message} (${err.name})`
				);
			});
		document.getElementById('startScreen').style.display = 'none';
	});
});
