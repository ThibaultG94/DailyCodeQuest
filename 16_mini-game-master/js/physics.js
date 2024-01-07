import { GRAVITY } from './constants.js';
import { gameOver } from './gameOver.js';
import { gameState } from './gameState.js';

const applyGravity = (player) => {
	if (!player.isOnGround()) {
		player.velocityY += GRAVITY; // Define gravity as a constant somewhere
		player.y += player.velocityY;
	}
};

const checkCollisions = (player, obstacle) => {
	if (player.collidesWith(obstacle)) {
		gameState.running = false;
		gameOver(); // Appelle une fonction qui gère la logique de fin de jeu
	}
};

export { applyGravity, checkCollisions, GRAVITY };
