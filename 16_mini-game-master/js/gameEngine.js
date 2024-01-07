import { setupInputListener } from './input.js';
import { updateGameArea, clearCanvas } from './rendering.js';
import { applyGravity, checkCollisions } from './physics.js';
import { gameState } from './gameState.js';
import { Player } from './entities/player.js';
import { Obstacle } from './entities/obstacle.js';
import {
	gameSettings,
	increaseGameSpeed,
	resetGameSpeed,
} from './constants.js';

export const canvas = document.getElementById('gameCanvas');
export const ctx = canvas.getContext('2d');
export const obstacles = [];
const positionX = canvas.width / 2 + 200;
const positionY = canvas.height / 2 + 300;
const player = new Player(positionX, positionY, 100, 20);
let obstacleTimeoutId;

const createObstacle = () => {
	const x = Math.random() * canvas.width;
	const obstacle = new Obstacle(x, 0, 50, 50);
	obstacles.push(obstacle);

	obstacleTimeoutId = setTimeout(
		createObstacle,
		gameSettings.OBSTACLE_CREATION_RATE
	);

	increaseGameSpeed();
};

const init = () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	setupInputListener(player);
	createObstacle();
	startGame();
};

const startGame = () => {
	requestAnimationFrame(gameLoop);
};

const gameLoop = () => {
	clearCanvas(canvas, ctx);
	applyGravity(player);
	obstacles.forEach((obstacle, index) => {
		obstacle.update();
		checkCollisions(player, obstacle);

		if (obstacle.y > canvas.height) {
			gameState.score++;
			obstacles.splice(index, 1);
		}
	});
	updateGameArea(ctx, player, obstacles);

	if (gameState.running) {
		requestAnimationFrame(gameLoop);
	}
};

const resetGame = (gameOverScreen) => {
	gameState.running = true;
	gameState.score = 0;
	obstacles.length = 0;

	gameOverScreen.style.display = 'none';

	resetGameSpeed();
	clearTimeout(obstacleTimeoutId);
	obstacleTimeoutId = setTimeout(
		createObstacle,
		gameSettings.OBSTACLE_CREATION_RATE
	);

	// Redémarrer le jeu
	init();
};

setTimeout(createObstacle, gameSettings.OBSTACLE_CREATION_RATE);

export { init, resetGame };
