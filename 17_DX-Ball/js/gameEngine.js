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
import { byeBallSound } from './sounds.js';

let ball = {};
let player;
export const canvas = document.getElementById('gameCanvas');
export const ctx = canvas.getContext('2d');
const positionX = window.innerWidth / 2 - 100;
const positionY = window.innerHeight + 100;

export const init = async () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	player = new Player(positionX, positionY, 100, 10);
	await createBall();

	setupInputListener(player, canvas);
	canvas.addEventListener('click', launchBall);

	startGame();
};

const createBall = async () => {
	ball = new Ball(positionX, positionY - 10, 10);
};

export const resetGame = () => {
	cancelAnimationFrame(gameState.animationFrameId);
	ball = {};
	gameState.score = 0;
	gameState.level = 1;
	gameState.isGameOver = false;
	gameState.animationFrameId = null;

	// Important: Supprime l'ancien gestionnaire d'événements pour éviter les doublons
	canvas.removeEventListener('click', launchBall);

	byeBallSound.pause();
	byeBallSound.currentTime = 0;

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
		updateBallPosition(ball, player);
		checkGameOver(ball, canvas);
	}

	gameState.animationFrameId = requestAnimationFrame(gameLoop);
};

const launchBall = () => {
	if (!ball.isMoving) {
		ball.launch();
	}
};

const startGame = () => {
	if (gameState.animationFrameId) {
		cancelAnimationFrame(gameState.animationFrameId);
	}
	gameState.animationFrameId = requestAnimationFrame(gameLoop);
};

export const togglePause = () => {
	gameState.isPaused = !gameState.isPaused;

	if (gameState.isPaused) {
		// Afficher un écran de pause ou un message
	} else {
		// Cacher l'écran de pause ou le message
	}
};
