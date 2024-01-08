import { togglePause } from './gameEngine.js';

export const setupInputListener = (player, canvas) => {
	window.addEventListener('keydown', (e) => {
		if (e.code === 'ArrowLeft') {
			player.moveLeft();
		} else if (e.code === 'ArrowRight') {
			player.moveRight();
		}
	});

	window.addEventListener('mousemove', (e) => {
		const canvasRect = canvas.getBoundingClientRect();
		const mouseX = e.clientX - canvasRect.left;

		if (mouseX > 0 && mouseX < canvas.width) {
			player.x = mouseX - player.width / 2;
		}
	});

	window.addEventListener('keydown', (e) => {
		if (e.code === 'Space') {
			togglePause();
		}
	});
};
