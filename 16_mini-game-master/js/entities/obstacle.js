import { gameSettings } from '../constants.js';

class Obstacle {
	constructor(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.color = 'red';
	}

	draw(ctx) {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}

	update() {
		this.y += gameSettings.GAME_SPEED; // Define gameSpeed as a constant somewhere
	}
}

export { Obstacle };
