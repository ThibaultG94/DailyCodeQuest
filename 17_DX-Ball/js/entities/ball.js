class Ball {
	constructor(x, y, radius) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = 'white';
		this.isMoving = false;

		// Vitesse de départ de la balle
		this.speedX = 0; // Vitesse horizontale
		this.speedY = 0; // Vitesse verticale (négative pour aller vers le haut)
	}

	draw(ctx) {
		const lightX = this.x - this.radius;
		const lightY = this.y - this.radius;
		const gradient = ctx.createRadialGradient(
			lightX,
			lightY,
			this.radius * 0.95,
			this.x,
			this.y,
			this.radius
		);
		gradient.addColorStop(0, 'white'); // Reflet brillant
		gradient.addColorStop(0.2, 'silver'); // Lumière intense
		gradient.addColorStop(0.5, 'grey'); // Couleur principale du métal

		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
		ctx.fillStyle = gradient;
		ctx.fill();
		ctx.closePath();
	}

	attachToPlayer(player) {
		this.x = player.x + player.width / 2;
		this.y = player.y - this.radius;
	}

	launch() {
		this.speedX = Math.random() * 4 - 2;
		this.speedY = -2;
		this.isMoving = true;
	}

	// Mettre à jour la position de la balle
	update() {
		if (this.isMoving) {
			this.x += this.speedX;
			this.y += this.speedY;
		}
	}

	// Méthodes pour gérer les collisions viendront ici
}

export { Ball };
