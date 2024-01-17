function preload() {
	this.load.atlasXML(
		'landscape',
		'assets/landscape_sheet.png',
		'assets/landscape_sheet.xml'
	);
	this.load.atlasXML(
		'towers_brown',
		'assets/towers_brown_sheet.png',
		'assets/towers_brown_sheet.xml'
	);
	this.load.atlasXML(
		'towers_grey',
		'assets/towers_grey_sheet.png',
		'assets/towers_grey_sheet.xml'
	);
	this.load.atlasXML(
		'towers_red',
		'assets/towers_red_sheet.png',
		'assets/towers_red_sheet.xml'
	);
}

function create() {
	const startPointX = 600;
	const startPointY = 60;
	const tileWidth = 132;
	const tileHeight = 66;
	const tileDetailHeight = 40;
	const tileTowerWidth = 92;
	const tileTowerHeight = 29;

	// Range One
	this.add.image(startPointX, startPointY, 'landscape', 'landscape_28.png');
	this.add.image(
		startPointX - tileWidth / 2,
		startPointY + tileDetailHeight / 2,
		'landscape',
		'trees_5.png'
	);
	this.add.image(
		startPointX - tileWidth,
		startPointY + tileHeight + 1,
		'landscape',
		'landscape_28.png'
	);
	this.add.image(
		startPointX - tileWidth * 1.5,
		startPointY + tileHeight * 1.5 + 1,
		'landscape',
		'landscape_28.png'
	);
	this.add.image(
		startPointX - tileWidth * 2,
		startPointY + tileHeight * 2 + 1,
		'landscape',
		'landscape_28.png'
	);
	this.add.image(
		startPointX - tileWidth * 2,
		startPointY + tileHeight * 2 - tileTowerHeight,
		'towers_grey',
		'tower_13.png'
	);
	this.add.image(
		startPointX - tileWidth * 2.5,
		startPointY + tileHeight * 2.5 + 1,
		'landscape',
		'landscape_28.png'
	);
	this.add.image(
		startPointX - tileWidth * 3,
		startPointY + tileHeight * 3 + 1,
		'landscape',
		'landscape_28.png'
	);
	this.add.image(
		startPointX - tileWidth * 3.5,
		startPointY + tileHeight * 3.5,
		'landscape',
		'landscape_28.png'
	);

	// Range Two
	this.add.image(
		startPointX + tileWidth / 2,
		startPointY + tileHeight / 2,
		'landscape',
		'landscape_38.png'
	);
	this.add.image(
		startPointX,
		startPointY + tileHeight,
		'landscape',
		'landscape_29.png'
	);
	this.add.image(
		startPointX - tileWidth / 2,
		startPointY + tileHeight * 1.5,
		'landscape',
		'landscape_29.png'
	);
	this.add.image(
		startPointX - tileWidth,
		startPointY + tileHeight * 2,
		'landscape',
		'landscape_29.png'
	);
	this.add.image(
		startPointX - tileWidth * 1.5,
		startPointY + tileHeight * 2.5,
		'landscape',
		'landscape_29.png'
	);
	this.add.image(
		startPointX - tileWidth * 2,
		startPointY + tileHeight * 3,
		'landscape',
		'landscape_29.png'
	);
	this.add.image(
		startPointX - tileWidth * 2.5,
		startPointY + tileHeight * 3.5,
		'landscape',
		'landscape_29.png'
	);
	this.add.image(
		startPointX - tileWidth * 3,
		startPointY + tileHeight * 4,
		'landscape',
		'landscape_29.png'
	);

	// Range Three
	this.add.image(
		startPointX + tileWidth,
		startPointY + tileHeight,
		'landscape',
		'landscape_32.png'
	);
	this.add.image(
		startPointX + tileWidth / 2,
		startPointY + tileHeight * 1.5,
		'landscape',
		'landscape_28.png'
	);
	this.add.image(
		startPointX,
		startPointY + tileHeight * 2,
		'landscape',
		'landscape_28.png'
	);
	this.add.image(
		startPointX - tileWidth / 2,
		startPointY + tileHeight * 2.5,
		'landscape',
		'landscape_28.png'
	);
	this.add.image(
		startPointX - tileWidth,
		startPointY + tileHeight * 3 - tileDetailHeight / 3 - 1,
		'landscape',
		'trees_5.png'
	);
	this.add.image(
		startPointX - tileWidth * 1.5,
		startPointY + tileHeight * 3.5,
		'landscape',
		'landscape_28.png'
	);
	this.add.image(
		startPointX - tileWidth * 2,
		startPointY + tileHeight * 4,
		'landscape',
		'landscape_28.png'
	);
	this.add.image(
		startPointX - tileWidth * 2,
		startPointY + tileHeight * 4 - tileTowerHeight,
		'towers_grey',
		'tower_06.png'
	);
	this.add.image(
		startPointX - tileWidth * 2.5,
		startPointY + tileHeight * 4.5,
		'landscape',
		'landscape_28.png'
	);

	// Range Four
	this.add.image(
		startPointX + tileWidth * 1.5,
		startPointY + tileHeight * 1.5,
		'landscape',
		'landscape_32.png'
	);
	this.add.image(
		startPointX + tileWidth * 1.5,
		startPointY + tileHeight * 1.5 - tileTowerHeight * 1.5,
		'towers_brown',
		'tower_45.png'
	);
	this.add.image(
		startPointX + tileWidth,
		startPointY + tileHeight * 2,
		'landscape',
		'rocks_1.png'
	);
	this.add.image(
		startPointX + tileWidth / 2,
		startPointY + tileHeight * 2.5,
		'landscape',
		'landscape_28.png'
	);
	this.add.image(
		startPointX,
		startPointY + tileHeight * 3,
		'landscape',
		'landscape_28.png'
	);
	this.add.image(
		startPointX - tileWidth / 2,
		startPointY + tileHeight * 3.5,
		'landscape',
		'landscape_28.png'
	);
	this.add.image(
		startPointX - tileWidth,
		startPointY + tileHeight * 4,
		'landscape',
		'landscape_28.png'
	);
	this.add.image(
		startPointX - tileWidth * 1.5,
		startPointY + tileHeight * 4.5,
		'landscape',
		'landscape_28.png'
	);
	this.add.image(
		startPointX - tileWidth * 2,
		startPointY + tileHeight * 5,
		'landscape',
		'landscape_28.png'
	);

	// Range Five
	this.add.image(
		startPointX + tileWidth * 2,
		startPointY + tileHeight * 2,
		'landscape',
		'landscape_03.png'
	);
	this.add.image(
		startPointX + tileWidth * 1.5,
		startPointY + tileHeight * 2.5,
		'landscape',
		'landscape_29.png'
	);
	this.add.image(
		startPointX + tileWidth,
		startPointY + tileHeight * 3,
		'landscape',
		'landscape_29.png'
	);
	this.add.image(
		startPointX + tileWidth / 2,
		startPointY + tileHeight * 3.5,
		'landscape',
		'landscape_29.png'
	);
	this.add.image(
		startPointX,
		startPointY + tileHeight * 4,
		'landscape',
		'landscape_29.png'
	);
	this.add.image(
		startPointX - tileWidth / 2,
		startPointY + tileHeight * 4.5,
		'landscape',
		'landscape_29.png'
	);
	this.add.image(
		startPointX - tileWidth,
		startPointY + tileHeight * 5,
		'landscape',
		'landscape_29.png'
	);
	this.add.image(
		startPointX - tileWidth * 1.5,
		startPointY + tileHeight * 5.5,
		'landscape',
		'landscape_02.png'
	);

	// Range Six
	this.add.image(
		startPointX + tileWidth * 2.5,
		startPointY + tileHeight * 2.5 - tileDetailHeight / 3 - 1,
		'landscape',
		'trees_5.png'
	);
	this.add.image(
		startPointX + tileWidth * 2,
		startPointY + tileHeight * 3,
		'landscape',
		'landscape_16.png'
	);
	this.add.image(
		startPointX + tileWidth * 1.5 + 1,
		startPointY + tileHeight * 3.5 - 8,
		'landscape',
		'landscape_22.png'
	);
	this.add.image(
		startPointX + tileWidth * 1.5 + 1,
		startPointY + tileHeight * 3.5 - 8 - tileTowerHeight * 1.25,
		'towers_brown',
		'tower_54.png'
	);
	this.add.image(
		startPointX + tileWidth + 1,
		startPointY + tileHeight * 4 - 8,
		'landscape',
		'landscape_20.png'
	);
	this.add.image(
		startPointX + tileWidth / 2,
		startPointY + tileHeight * 4.5,
		'landscape',
		'landscape_28.png'
	);
	this.add.image(
		startPointX,
		startPointY + tileHeight * 5,
		'landscape',
		'landscape_28.png'
	);
	this.add.image(
		startPointX,
		startPointY + tileHeight * 5 - tileTowerHeight,
		'towers_grey',
		'tower_26.png'
	);
	this.add.image(
		startPointX - tileWidth / 2,
		startPointY + tileHeight * 5.5,
		'landscape',
		'landscape_28.png'
	);
	this.add.image(
		startPointX - tileWidth,
		startPointY + tileHeight * 6,
		'landscape',
		'landscape_32.png'
	);

	// Range Seven
	this.add.image(
		startPointX + tileWidth * 3,
		startPointY + tileHeight * 3,
		'landscape',
		'landscape_28.png'
	);
	this.add.image(
		startPointX + tileWidth * 2.5,
		startPointY + tileHeight * 3.5,
		'landscape',
		'landscape_26.png'
	);
	this.add.image(
		startPointX + tileWidth * 2,
		startPointY + tileHeight * 4 - 8,
		'landscape',
		'landscape_23.png'
	);
	this.add.image(
		startPointX + tileWidth * 1.5,
		startPointY + tileHeight * 4.5,
		'landscape',
		'landscape_38.png'
	);
	this.add.image(
		startPointX + tileWidth,
		startPointY + tileHeight * 5,
		'landscape',
		'landscape_29.png'
	);
	this.add.image(
		startPointX + tileWidth / 2,
		startPointY + tileHeight * 5.5,
		'landscape',
		'landscape_29.png'
	);
	this.add.image(
		startPointX,
		startPointY + tileHeight * 6,
		'landscape',
		'landscape_29.png'
	);
	this.add.image(
		startPointX - tileWidth / 2,
		startPointY + tileHeight * 6.5,
		'landscape',
		'landscape_07.png'
	);

	// Range Eight
	this.add.image(
		startPointX + tileWidth * 3.5,
		startPointY + tileHeight * 3.5,
		'landscape',
		'landscape_33.png'
	);
	this.add.image(
		startPointX + tileWidth * 3,
		startPointY + tileHeight * 4,
		'landscape',
		'landscape_33.png'
	);
	this.add.image(
		startPointX + tileWidth * 2.5,
		startPointY + tileHeight * 4.5,
		'landscape',
		'landscape_33.png'
	);
	this.add.image(
		startPointX + tileWidth * 2,
		startPointY + tileHeight * 5,
		'landscape',
		'landscape_04.png'
	);
	this.add.image(
		startPointX + tileWidth * 1.5,
		startPointY + tileHeight * 5.5,
		'landscape',
		'landscape_33.png'
	);
	this.add.image(
		startPointX + tileWidth,
		startPointY + tileHeight * 6,
		'landscape',
		'landscape_00.png'
	);
	this.add.image(
		startPointX + tileWidth / 2,
		startPointY + tileHeight * 6.5 - tileDetailHeight / 3 + 2,
		'landscape',
		'trees_2.png'
	);
	this.add.image(
		startPointX,
		startPointY + tileHeight * 7,
		'landscape',
		'landscape_28.png'
	);

	// Range Nine
	this.add.image(
		startPointX + tileWidth * 4,
		startPointY + tileHeight * 4,
		'landscape',
		'landscape_28.png'
	);
	this.add.image(
		startPointX + tileWidth * 3.5,
		startPointY + tileHeight * 4.5,
		'landscape',
		'rocks_5.png'
	);
	this.add.image(
		startPointX + tileWidth * 3,
		startPointY + tileHeight * 5 - tileDetailHeight / 3 + 6,
		'landscape',
		'trees_3.png'
	);
	this.add.image(
		startPointX + tileWidth * 2.5,
		startPointY + tileHeight * 5.5,
		'landscape',
		'landscape_32.png'
	);
	this.add.image(
		startPointX + tileWidth * 2,
		startPointY + tileHeight * 6 - tileDetailHeight / 3 + 6,
		'landscape',
		'crystals_1.png'
	);
	this.add.image(
		startPointX + tileWidth * 1.5,
		startPointY + tileHeight * 6.5,
		'landscape',
		'landscape_37.png'
	);
	this.add.image(
		startPointX + tileWidth,
		startPointY + tileHeight * 7,
		'landscape',
		'landscape_28.png'
	);
	this.add.image(
		startPointX + tileWidth,
		startPointY + tileHeight * 7 - tileTowerHeight,
		'towers_red',
		'tower_32.png'
	);
	this.add.image(
		startPointX + tileWidth / 2,
		startPointY + tileHeight * 7.5,
		'landscape',
		'rocks_8.png'
	);

	// Range Ten
	this.add.image(
		startPointX + tileWidth * 4.5,
		startPointY + tileHeight * 4.5,
		'landscape',
		'landscape_29.png'
	);
	this.add.image(
		startPointX + tileWidth * 4,
		startPointY + tileHeight * 5,
		'landscape',
		'landscape_29.png'
	);
	this.add.image(
		startPointX + tileWidth * 3.5,
		startPointY + tileHeight * 5.5,
		'landscape',
		'landscape_29.png'
	);
	this.add.image(
		startPointX + tileWidth * 3,
		startPointY + tileHeight * 6,
		'landscape',
		'landscape_07.png'
	);
	this.add.image(
		startPointX + tileWidth * 2.5,
		startPointY + tileHeight * 6.5,
		'landscape',
		'landscape_28.png'
	);
	this.add.image(
		startPointX + tileWidth * 2,
		startPointY + tileHeight * 7,
		'landscape',
		'landscape_37.png'
	);
	this.add.image(
		startPointX + tileWidth * 1.5,
		startPointY + tileHeight * 7.5,
		'landscape',
		'landscape_28.png'
	);
	this.add.image(
		startPointX + tileWidth,
		startPointY + tileHeight * 8,
		'landscape',
		'landscape_28.png'
	);
}

function update() {}

const config = {
	type: Phaser.AUTO,
	width: 1350,
	height: 625,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 0 },
			debug: false,
		},
	},
	scene: {
		preload: preload,
		create: create,
		update: update,
	},
};

const game = new Phaser.Game(config);
