class Player {
	constructor(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.color = 'grey';
		this.velocityY = 0;
	}

	draw(ctx) {
		const cornerRadius = 8;

		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 5;
		ctx.shadowBlur = 10;
		ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';

		const gradient = ctx.createLinearGradient(
			this.x,
			this.y,
			this.x,
			this.y + this.height
		);
		gradient.addColorStop(0, 'cyan');
		gradient.addColorStop(1, 'blue');

		// Commence le dessin
		ctx.beginPath();

		// Coin supérieur gauche
		ctx.moveTo(this.x + cornerRadius, this.y);

		// Ligne du haut
		ctx.lineTo(this.x + this.width - cornerRadius, this.y);

		// Arc supérieur droit
		ctx.quadraticCurveTo(
			this.x + this.width,
			this.y,
			this.x + this.width,
			this.y + cornerRadius
		);

		// Ligne de droite
		ctx.lineTo(this.x + this.width, this.y + this.height - cornerRadius);

		// Arc inférieur droit
		ctx.quadraticCurveTo(
			this.x + this.width,
			this.y + this.height,
			this.x + this.width - cornerRadius,
			this.y + this.height
		);

		// Ligne du bas
		ctx.lineTo(this.x + cornerRadius, this.y + this.height);

		// Arc inférieur gauche
		ctx.quadraticCurveTo(
			this.x,
			this.y + this.height,
			this.x,
			this.y + this.height - cornerRadius
		);

		// Ligne de gauche
		ctx.lineTo(this.x, this.y + cornerRadius);

		// Arc supérieur gauche
		ctx.quadraticCurveTo(this.x, this.y, this.x + cornerRadius, this.y);

		// Ferme le chemin
		ctx.closePath();

		// Applique le style
		ctx.fillStyle = gradient;
		ctx.fill();

		// Reset l'ombre pour ne pas affecter les autres dessins
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 0;
		ctx.shadowBlur = 0;
		ctx.shadowColor = 'transparent';
	}

	moveLeft() {
		this.x -= 25;
	}

	moveRight() {
		this.x += 25;
	}

	collidesWith(ball) {
		return (
			this.x < ball.x + ball.width &&
			this.x + this.width > ball.x &&
			this.y < ball.y + ball.height &&
			this.height + this.y > ball.y
		);
	}
}

export { Player };
