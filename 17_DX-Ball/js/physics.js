import { gameOver } from './gameOver.js';
import { gameState } from './gameState.js';
import { ACCELERATION } from './constants.js';
import { playBounceSound } from './sounds.js';

const checkWallCollisions = (ball, canvas) => {
	// Collision avec le mur du haut
	if (ball.y - ball.radius <= 0) {
		if (!gameState.isGameOver) {
			playBounceSound(ball);
		}
		ball.speedY = -ball.speedY; // Inverse la vitesse verticale
		ball.speedY *= ACCELERATION;
	}

	// Collision avec le mur de gauche ou de droite
	if (ball.x - ball.radius <= 0 || ball.x + ball.radius >= canvas.width) {
		if (!gameState.isGameOver) {
			playBounceSound(ball);
		}
		ball.speedX = -ball.speedX; // Inverse la vitesse horizontale
		ball.speedX *= ACCELERATION;
	}
};

const checkPlayerCollision = (ball, player) => {
	// Calcule la position future de la balle
	const futureX = ball.x + ball.speedX;
	const futureY = ball.y + ball.speedY;

	// Vérifie si la position future de la balle intersecte avec le joueur
	if (
		futureY + ball.radius >= player.y &&
		futureY - ball.radius <= player.y + player.height &&
		futureX >= player.x &&
		futureX <= player.x + player.width
	) {
		// Collision détectée, inverse la vitesse verticale
		if (ball.speedY > 0) {
			ball.speedY = -ball.speedY;

			// Ajoute de la variation selon l'endroit où la balle frappe le player
			const hitPoint = futureX - (player.x + player.width / 2);
			const hitRatio = hitPoint / (player.width / 2);

			// Change la vitesse horizontale basée sur le point d'impact
			ball.speedX = hitRatio * 5; // Multiplier par un facteur pour plus ou moins d'influence

			if (ball.isMoving) {
				playBounceSound(ball);
				gameState.score += 1;
				ball.speedX *= ACCELERATION;
				ball.speedY *= ACCELERATION;
			}
		}
	}
};

const updateBallPosition = (ball, player) => {
	const steps = Math.max(Math.abs(ball.speedX), Math.abs(ball.speedY));
	const stepX = ball.speedX / steps;
	const stepY = ball.speedY / steps;

	for (let i = 0; i < steps; i++) {
		// Déplace la balle par petites étapes
		ball.x += stepX;
		ball.y += stepY;

		// Vérifie la collision avec le joueur à chaque étape
		if (checkPlayerCollision(ball, player)) {
			break;
		}
	}
};

const checkGameOver = (ball, canvas) => {
	if (ball.y - ball.radius > canvas.height && !gameState.isGameOver) {
		gameState.isGameOver = true;
		gameOver();
	}
};

export {
	checkWallCollisions,
	checkPlayerCollision,
	updateBallPosition,
	checkGameOver,
};
