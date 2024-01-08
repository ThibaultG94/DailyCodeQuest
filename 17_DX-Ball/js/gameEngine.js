import { Ball } from './entities/ball.js';
import { Player } from './entities/player.js';
import { gameState } from './gameState.js';
import { setupInputListener } from './input.js';
import {
	checkGameOver,
	checkPlayerCollision,
	checkWallCollisions,
	updateBallPosition,
} from './physics.js';
import { clearCanvas, updateGameArea } from './rendering.js';

export const canvas = document.getElementById('gameCanvas');
export const ctx = canvas.getContext('2d');
const positionX = window.innerWidth / 2 - 100;
const positionY = window.innerHeight + 100;
const player = new Player(positionX, positionY, 100, 10);
const ball = new Ball(positionX, positionY - 10, 10);
let animationFrameId;

export const init = () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	setupInputListener(player, canvas);
	canvas.addEventListener('click', launchBall);

	startGame();
};

export const resetGame = () => {
	gameState.score = 0;
	gameState.level = 1;

	// Réinitialise la position du player
	player.x = window.innerWidth / 2 - player.width / 2;
	player.y = window.innerHeight - player.height - 20;

	// Réinitialise la position et l'état de la balle
	ball.x = player.x + player.width / 2;
	ball.y = player.y - ball.radius - 5; // Juste au-dessus du player
	ball.speedX = 0;
	ball.speedY = 0;
	ball.isMoving = false;

	// Important: Supprime l'ancien gestionnaire d'événements pour éviter les doublons
	canvas.removeEventListener('click', launchBall);

	// Redémarre le jeu
	init();
};

const gameLoop = () => {
	if (!gameState.isPaused) {
		clearCanvas(canvas, ctx);

		if (!ball.isMoving) {
			ball.attachToPlayer(player);
		}

		updateGameArea(ctx, player, ball);

		checkWallCollisions(ball, canvas);
		checkPlayerCollision(ball, player);
		updateBallPosition(ball);
		checkGameOver(ball, canvas);
	}

	requestAnimationFrame(gameLoop);
};

const launchBall = () => {
	if (!ball.isMoving) {
		ball.launch();
	}
};

const startGame = () => {
	if (animationFrameId) {
		cancelAnimationFrame(animationFrameId);
	}
	animationFrameId = requestAnimationFrame(gameLoop);
};

export const togglePause = () => {
	gameState.isPaused = !gameState.isPaused;

	if (gameState.isPaused) {
		// Afficher un écran de pause ou un message
	} else {
		// Cacher l'écran de pause ou le message
	}
};
