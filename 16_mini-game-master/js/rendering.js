import { gameState } from './gameState.js';

const clearCanvas = (canvas, ctx) => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
};

const updateGameArea = (ctx, player, obstacles) => {
	player.draw(ctx);
	obstacles.forEach((obstacle) => obstacle.draw(ctx));
	drawScore(ctx);
};

const drawScore = (ctx) => {
	ctx.font = '16px Arial';
	ctx.fillStyle = 'black';
	ctx.fillText(`Score: ${gameState.score}`, 10, 50);
};

export { clearCanvas, updateGameArea };
