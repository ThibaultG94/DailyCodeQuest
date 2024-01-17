import { preloadAssets } from './preloadAssets.js';
import { createScene } from './createScene.js';

function update() {}

const config = {
	type: Phaser.AUTO,
	width: 1350,
	height: 630,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 0 },
			debug: false,
		},
	},
	scene: {
		preload: function () {
			preloadAssets(this);
		},
		create: function () {
			createScene(this);
		},
		update: update,
	},
};

const game = new Phaser.Game(config);
