import { gameOver } from './gameOver.js';
import { gameState } from './gameState.js';
import { ACCELERATION } from './constants.js';
import { playBounceSound } from './sounds.js';

const checkWallCollisions = (ball, canvas) => {
	// Collision avec le mur du haut
	if (ball.y - ball.radius <= 0) {
		playBounceSound();
		ball.speedY = -ball.speedY; // Inverse la vitesse verticale
		ball.speedY *= ACCELERATION;
	}

	// Collision avec le mur de gauche ou de droite
	if (ball.x - ball.radius <= 0 || ball.x + ball.radius >= canvas.width) {
		playBounceSound();
		ball.speedX = -ball.speedX; // Inverse la vitesse horizontale
		ball.speedX *= ACCELERATION;
	}
};

const checkPlayerCollision = (ball, player) => {
	// Collision avec le player
	if (
		ball.y + ball.radius >= player.y &&
		ball.y - ball.radius <= player.y + player.height &&
		ball.x >= player.x &&
		ball.x <= player.x + player.width
	) {
		// On vérifie si la balle se déplace vers le bas avant de rebondir
		if (ball.speedY > 0) {
			ball.speedY = -ball.speedY; // Inverse la vitesse verticale

			// Ajoute de la variation selon l'endroit où la balle frappe le player
			const hitPoint = ball.x - (player.x + player.width / 2);
			const hitRatio = hitPoint / (player.width / 2);

			// Change la vitesse horizontale basée sur le point d'impact
			ball.speedX = hitRatio * 5; // Multiplier par un facteur pour plus ou moins d'influence

			// Incrémente le score si la balle est en mouvement
			if (ball.isMoving) {
				playBounceSound();
				gameState.score += 1;
				ball.speedX *= ACCELERATION;
				ball.speedY *= ACCELERATION;
			}
		}
	}
};

const updateBallPosition = (ball) => {
	if (ball.isMoving) {
		ball.x += ball.speedX;
		ball.y += ball.speedY;
	}
};

const checkGameOver = (ball, canvas) => {
	// Vérifie si la balle est tombée en bas de l'écran
	if (ball.y - ball.radius > canvas.height) {
		gameOver();
	}
};

export {
	checkWallCollisions,
	checkPlayerCollision,
	updateBallPosition,
	checkGameOver,
};
