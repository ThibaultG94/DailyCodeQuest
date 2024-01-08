import { gameState } from './gameState.js';

export const clearCanvas = (canvas, ctx) => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
};

export const updateGameArea = (ctx, player, ball) => {
	player.draw(ctx);
	ball.draw(ctx);
	drawScore(ctx);
};

const drawScore = (ctx) => {
	ctx.font = '16px Arial';
	ctx.fillStyle = 'white';
	ctx.fillText(`Score: ${gameState.score}`, 10, 50);
	// ctx.fillText(`Level: ${gameState.level}`, 10, 70);
	displayHighScore();
	ctx.fillText(`High Score: ${gameState.highScore}`, 10, 90);
};

const displayHighScore = () => {
	gameState.highScore = localStorage.getItem('highScore') || 0;
};
