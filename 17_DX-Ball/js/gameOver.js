import { gameState } from './gameState.js';
import { resetGame } from './gameEngine.js';
import { canvas } from './gameEngine.js';

const gameOverScreen = document.createElement('div');
gameOverScreen.className = 'game-over-screen';
gameOverScreen.innerHTML = `
  <div>
    <p>Game Over!</p>
    <button id="replay-button">Clique pour rejouer</button>
  </div>
`;
document.body.appendChild(gameOverScreen);

// Cache le gameOverScreen par défaut
gameOverScreen.style.display = 'none';

const gameOver = () => {
	// Arrêter la mise à jour du jeu
	cancelAnimationFrame(gameState.animationFrameId);

	document.exitFullscreen();

	// Afficher le gameOverScreen
	gameOverScreen.style.display = 'flex';

	// Sauvegarder le score dans le localStorage
	if (gameState.score > gameState.highScore) {
		gameState.highScore = gameState.score;
	}
	localStorage.setItem('highScore', gameState.highScore.toString());

	// Ajouter un listener au bouton de rejouer
	document.getElementById('replay-button').addEventListener('click', () => {
		canvas
			.requestFullscreen()
			.then(() => {
				resetGame();
			})
			.catch((err) => {
				console.error(
					`Error trying to enter fullscreen mode: ${err.message} (${err.name})`
				);
			});
		gameOverScreen.style.display = 'none'; // Cache le gameOverScreen
	});
};

export { gameOver };
