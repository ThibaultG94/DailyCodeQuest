import { gameState } from './gameState.js';
import { resetGame } from './gameEngine.js';

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

	// Afficher le gameOverScreen
	gameOverScreen.style.display = 'flex';

	// Ajouter un listener au bouton de rejouer
	document
		.getElementById('replay-button')
		.addEventListener('click', () => resetGame(gameOverScreen), {
			once: true,
		});
};

export { gameOver };
