// Définition du canvas et du contexte
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Configuration de la souris
const mouse = {
	x: null,
	y: null,
	radius: 150,
};

// Peinture active ou non
let isPainting = false;

// Ajustement de la taille du canvas lors du redimensionnement de la fenêtre
window.addEventListener('resize', function () {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
});

// Écouteurs d'événements pour la souris
canvas.addEventListener('mousemove', function (event) {
	mouse.x = event.x - canvas.offsetLeft;
	mouse.y = event.y - canvas.offsetTop;
	if (isPainting) {
		addParticle(event.x - canvas.offsetLeft, event.y - canvas.offsetTop);
	}
});

canvas.addEventListener('mousedown', function (event) {
	mouse.x = event.x - canvas.offsetLeft;
	mouse.y = event.y - canvas.offsetTop;
	isPainting = true;
	addParticle(event.x - canvas.offsetLeft, event.y - canvas.offsetTop);
	// Ajoute un polygone à l'endroit cliqué
	polygons.push(
		new Polygon(
			event.x - canvas.offsetLeft,
			event.y - canvas.offsetTop,
			50,
			6
		)
	);
	changeScene(); // Change de scène à chaque clic
});

canvas.addEventListener('mouseup', function () {
	isPainting = false;
});

// Définitions globales pour l'ambiance
let currentScene = 0; // 0: morning, 1: day, 2: evening, 3: night
const scenes = ['morning', 'day', 'evening', 'night'];

function changeScene() {
	currentScene = (currentScene + 1) % scenes.length; // Cycler à travers les scènes
}

// Classe pour les particules
class Particle {
	constructor(x, y, size, color, weight) {
		this.x = x;
		this.y = y;
		this.size = size;
		this.color = color;
		this.weight = weight;
	}

	draw() {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
		ctx.fillStyle = this.color;
		ctx.fill();
	}

	update() {
		this.size -= 0.05;
		if (this.size < 0) {
			this.x = Math.random() * canvas.width;
			this.y = Math.random() * canvas.height;
			this.size = Math.random() * 10 + 2;
			this.weight = Math.random() * 2 - 0.5;
		}
		this.y += this.weight;
		this.weight += 0.2;

		if (this.y > canvas.height - this.size) {
			this.weight *= -1;
		}
	}
}

// Classe pour les polygones
class Polygon {
	constructor(x, y, radius, sides) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.sides = sides;
		this.maxRadius = radius * 1.5;
		this.minRadius = radius * 0.5;
		this.growing = true;
		this.growthRate = 0.2;
	}

	draw() {
		ctx.beginPath();
		ctx.moveTo(
			this.x + this.radius * Math.cos(0),
			this.y + this.radius * Math.sin(0)
		);

		for (let i = 1; i <= this.sides; i++) {
			ctx.lineTo(
				this.x + this.radius * Math.cos((i * 2 * Math.PI) / this.sides),
				this.y + this.radius * Math.sin((i * 2 * Math.PI) / this.sides)
			);
		}

		ctx.closePath();
		ctx.strokeStyle = getColorForScene(); // Change color based on scene
		ctx.stroke();
	}

	update() {
		if (this.growing) {
			this.radius += this.growthRate;
			if (this.radius >= this.maxRadius) {
				this.growing = false; // Commencer à réduire
			}
		} else {
			this.radius -= this.growthRate;
			if (this.radius <= this.minRadius) {
				this.growing = true; // Commencer à grandir
			}
		}
		this.draw();
	}
}

// Fonction pour obtenir une couleur basée sur la scène actuelle
function getColorForScene() {
	switch (scenes[currentScene]) {
		case 'morning':
			return 'rgba(255, 179, 71, 0.8)'; // Couleur douce du matin
		case 'day':
			return 'rgba(0, 128, 255, 0.8)'; // Bleu vif de jour
		case 'evening':
			return 'rgba(255, 71, 71, 0.8)'; // Rouge du coucher de soleil
		case 'night':
			return 'rgba(0, 0, 64, 0.8)'; // Bleu foncé nocturne
		default:
			return 'rgba(255, 255, 255, 0.8)'; // Couleur par défaut (au cas où)
	}
}

// Tableau pour stocker les particules et les polygones
let particles = [];
let polygons = [];

function addParticle(x, y) {
	const size = 10; // Taille fixe pour l'instant
	const color = getColorForScene(); // Obtient la couleur en fonction de la scène
	const weight = 1;
	particles.push(new Particle(x, y, size, color, weight));
}

function init() {
	// Rien pour l'instant
}

function animate() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// Dessiner et mettre à jour les particules
	particles.forEach((particle) => {
		particle.update();
		particle.draw();
	});

	// Dessiner et mettre à jour les polygones
	polygons.forEach((polygon) => {
		polygon.update();
	});

	requestAnimationFrame(animate);
}

init();
animate();
