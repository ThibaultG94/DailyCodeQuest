import { GROUND_LEVEL } from '../constants.js';

class Player {
	constructor(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.color = 'blue';
		this.velocityY = 0;
	}

	draw(ctx) {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}

	isOnGround() {
		return this.y >= GROUND_LEVEL; // Define groundLevel as a constant somewhere
	}

	moveLeft() {
		this.x -= 10;
	}

	moveRight() {
		this.x += 10;
	}

	jump() {
		if (this.isOnGround()) {
			this.velocityY = -10; // Adjust the jump strength as needed
		}
	}

	collidesWith(obstacle) {
		// Simple AABB collision detection
		return (
			this.x < obstacle.x + obstacle.width &&
			this.x + this.width > obstacle.x &&
			this.y < obstacle.y + obstacle.height &&
			this.height + this.y > obstacle.y
		);
	}
}

export { Player };
