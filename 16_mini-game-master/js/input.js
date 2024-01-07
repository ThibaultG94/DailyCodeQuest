const setupInputListener = (player) => {
	window.addEventListener('keydown', (e) => {
		if (e.code === 'ArrowLeft') {
			player.moveLeft();
		} else if (e.code === 'ArrowRight') {
			player.moveRight();
		}
	});
};

export { setupInputListener };
