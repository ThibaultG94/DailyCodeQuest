export function createScene(scene) {
	const startPointX = 600;
	const startPointY = 60;
	const tileWidth = 132;
	const tileHeight = 66;
	const tileDetailHeight = 40;
	const tileTowerHeight = 29;

	// Range Zero
	scene.add.image(
		startPointX,
		startPointY - tileHeight,
		'landscape',
		'landscape_36.png'
	);
	scene.add.image(
		startPointX - tileWidth / 2,
		startPointY - tileHeight / 2,
		'landscape',
		'landscape_33.png'
	);
	scene.add.image(
		startPointX - tileWidth,
		startPointY,
		'landscape',
		'landscape_33.png'
	);
	scene.add.image(
		startPointX - tileWidth * 1.5,
		startPointY + tileHeight / 2,
		'landscape',
		'landscape_33.png'
	);
	scene.add.image(
		startPointX - tileWidth * 2,
		startPointY + tileHeight,
		'landscape',
		'landscape_33.png'
	);
	scene.add.image(
		startPointX - tileWidth * 2.5,
		startPointY + tileHeight * 1.5,
		'landscape',
		'landscape_33.png'
	);
	scene.add.image(
		startPointX - tileWidth * 3,
		startPointY + tileHeight * 2,
		'landscape',
		'landscape_33.png'
	);
	scene.add.image(
		startPointX - tileWidth * 3.5,
		startPointY + tileHeight * 2.5,
		'landscape',
		'landscape_33.png'
	);
	scene.add.image(
		startPointX - tileWidth * 4,
		startPointY + tileHeight * 3,
		'landscape',
		'landscape_33.png'
	);
	scene.add.image(
		startPointX - tileWidth * 4.5,
		startPointY + tileHeight * 3.5,
		'landscape',
		'landscape_00.png'
	);

	// Range One
	scene.add.image(
		startPointX + tileWidth / 2,
		startPointY - tileHeight / 2,
		'landscape',
		'landscape_37.png'
	);
	scene.add.image(startPointX, startPointY, 'landscape', 'landscape_28.png');
	scene.add.image(
		startPointX - tileWidth / 2,
		startPointY + tileDetailHeight / 2,
		'landscape',
		'trees_5.png'
	);
	scene.add.image(
		startPointX - tileWidth,
		startPointY + tileHeight + 1,
		'landscape',
		'landscape_28.png'
	);
	scene.add.image(
		startPointX - tileWidth * 1.5,
		startPointY + tileHeight * 1.5 + 1,
		'landscape',
		'landscape_28.png'
	);
	scene.add.image(
		startPointX - tileWidth * 2,
		startPointY + tileHeight * 2 + 1,
		'landscape',
		'landscape_28.png'
	);
	scene.add.image(
		startPointX - tileWidth * 2,
		startPointY + tileHeight * 2 - tileTowerHeight,
		'towers_grey',
		'tower_13.png'
	);
	scene.add.image(
		startPointX - tileWidth * 2,
		startPointY + tileHeight * 2 - tileTowerHeight * 2 - 5,
		'towers_grey',
		'tower_16.png'
	);
	scene.add.image(
		startPointX - tileWidth * 2,
		startPointY + tileHeight * 2 - tileTowerHeight * 3 - 10,
		'towers_grey',
		'tower_21.png'
	);
	scene.add.image(
		startPointX - tileWidth * 2.5,
		startPointY + tileHeight * 2.5 + 1,
		'landscape',
		'landscape_28.png'
	);
	scene.add.image(
		startPointX - tileWidth * 3,
		startPointY + tileHeight * 3 + 1,
		'landscape',
		'landscape_28.png'
	);
	scene.add.image(
		startPointX - tileWidth * 3.5,
		startPointY + tileHeight * 3.5,
		'landscape',
		'landscape_28.png'
	);
	scene.add.image(
		startPointX - tileWidth * 4,
		startPointY + tileHeight * 4,
		'landscape',
		'landscape_37.png'
	);

	// Range Two
	scene.add.image(
		startPointX + tileWidth,
		startPointY,
		'landscape',
		'landscape_37.png'
	);
	scene.add.image(
		startPointX + tileWidth / 2,
		startPointY + tileHeight / 2,
		'landscape',
		'landscape_38.png'
	);
	scene.add.image(
		startPointX,
		startPointY + tileHeight,
		'landscape',
		'landscape_29.png'
	);
	scene.add.image(
		startPointX - tileWidth / 2,
		startPointY + tileHeight * 1.5,
		'landscape',
		'landscape_29.png'
	);
	scene.add.image(
		startPointX - tileWidth,
		startPointY + tileHeight * 2,
		'landscape',
		'landscape_29.png'
	);
	scene.add.image(
		startPointX - tileWidth * 1.5,
		startPointY + tileHeight * 2.5,
		'landscape',
		'landscape_29.png'
	);
	scene.add.image(
		startPointX - tileWidth * 2,
		startPointY + tileHeight * 3,
		'landscape',
		'landscape_29.png'
	);
	scene.add.image(
		startPointX - tileWidth * 2.5,
		startPointY + tileHeight * 3.5,
		'landscape',
		'landscape_29.png'
	);
	scene.add.image(
		startPointX - tileWidth * 3,
		startPointY + tileHeight * 4,
		'landscape',
		'landscape_29.png'
	);
	scene.add.image(
		startPointX - tileWidth * 3.5,
		startPointY + tileHeight * 4.5,
		'landscape',
		'landscape_37.png'
	);

	// Range Three
	scene.add.image(
		startPointX + tileWidth * 1.5,
		startPointY + tileHeight / 2,
		'landscape',
		'landscape_37.png'
	);
	scene.add.image(
		startPointX + tileWidth,
		startPointY + tileHeight,
		'landscape',
		'landscape_32.png'
	);
	scene.add.image(
		startPointX + tileWidth / 2,
		startPointY + tileHeight * 1.5,
		'landscape',
		'landscape_28.png'
	);
	scene.add.image(
		startPointX,
		startPointY + tileHeight * 2,
		'landscape',
		'landscape_28.png'
	);
	scene.add.image(
		startPointX - tileWidth / 2,
		startPointY + tileHeight * 2.5,
		'landscape',
		'landscape_28.png'
	);
	scene.add.image(
		startPointX - tileWidth,
		startPointY + tileHeight * 3 - tileDetailHeight / 3 - 1,
		'landscape',
		'trees_5.png'
	);
	scene.add.image(
		startPointX - tileWidth * 1.5,
		startPointY + tileHeight * 3.5,
		'landscape',
		'landscape_28.png'
	);
	scene.add.image(
		startPointX - tileWidth * 2,
		startPointY + tileHeight * 4,
		'landscape',
		'landscape_28.png'
	);
	scene.add.image(
		startPointX - tileWidth * 2,
		startPointY + tileHeight * 4 - tileTowerHeight,
		'towers_grey',
		'tower_06.png'
	);
	scene.add.image(
		startPointX - tileWidth * 2,
		startPointY + tileHeight * 4 - tileTowerHeight * 2 - 10,
		'towers_grey',
		'tower_36.png'
	);
	scene.add.image(
		startPointX - tileWidth * 2.5,
		startPointY + tileHeight * 4.5,
		'landscape',
		'landscape_28.png'
	);
	scene.add.image(
		startPointX - tileWidth * 3,
		startPointY + tileHeight * 5,
		'landscape',
		'landscape_37.png'
	);

	// Range Four
	scene.add.image(
		startPointX + tileWidth * 2,
		startPointY + tileHeight,
		'landscape',
		'landscape_37.png'
	);
	scene.add.image(
		startPointX + tileWidth * 1.5,
		startPointY + tileHeight * 1.5,
		'landscape',
		'landscape_32.png'
	);
	scene.add.image(
		startPointX + tileWidth,
		startPointY + tileHeight * 2,
		'landscape',
		'rocks_1.png'
	);
	scene.add.image(
		startPointX + tileWidth / 2,
		startPointY + tileHeight * 2.5,
		'landscape',
		'landscape_28.png'
	);
	scene.add.image(
		startPointX,
		startPointY + tileHeight * 3,
		'landscape',
		'landscape_28.png'
	);
	scene.add.image(
		startPointX - tileWidth / 2,
		startPointY + tileHeight * 3.5,
		'landscape',
		'landscape_28.png'
	);
	scene.add.image(
		startPointX - tileWidth,
		startPointY + tileHeight * 4,
		'landscape',
		'landscape_28.png'
	);
	scene.add.image(
		startPointX - tileWidth * 1.5,
		startPointY + tileHeight * 4.5,
		'landscape',
		'landscape_28.png'
	);
	scene.add.image(
		startPointX - tileWidth * 2,
		startPointY + tileHeight * 5,
		'landscape',
		'landscape_28.png'
	);
	scene.add.image(
		startPointX - tileWidth * 2.5,
		startPointY + tileHeight * 5.5,
		'landscape',
		'landscape_37.png'
	);

	// Range Five
	scene.add.image(
		startPointX + tileWidth * 2.5,
		startPointY + tileHeight * 1.5,
		'landscape',
		'landscape_37.png'
	);
	scene.add.image(
		startPointX + tileWidth * 2,
		startPointY + tileHeight * 2,
		'landscape',
		'landscape_03.png'
	);
	scene.add.image(
		startPointX + tileWidth * 1.5,
		startPointY + tileHeight * 2.5,
		'landscape',
		'landscape_29.png'
	);
	scene.add.image(
		startPointX + tileWidth,
		startPointY + tileHeight * 3,
		'landscape',
		'landscape_29.png'
	);
	scene.add.image(
		startPointX + tileWidth / 2,
		startPointY + tileHeight * 3.5,
		'landscape',
		'landscape_29.png'
	);
	scene.add.image(
		startPointX,
		startPointY + tileHeight * 4,
		'landscape',
		'landscape_29.png'
	);
	scene.add.image(
		startPointX - tileWidth / 2,
		startPointY + tileHeight * 4.5,
		'landscape',
		'landscape_29.png'
	);
	scene.add.image(
		startPointX - tileWidth,
		startPointY + tileHeight * 5,
		'landscape',
		'landscape_29.png'
	);
	scene.add.image(
		startPointX - tileWidth * 1.5,
		startPointY + tileHeight * 5.5,
		'landscape',
		'landscape_02.png'
	);
	scene.add.image(
		startPointX - tileWidth * 2,
		startPointY + tileHeight * 6,
		'landscape',
		'landscape_37.png'
	);

	// Range Six
	scene.add.image(
		startPointX + tileWidth * 3,
		startPointY + tileHeight * 2,
		'landscape',
		'landscape_37.png'
	);
	scene.add.image(
		startPointX + tileWidth * 2.5,
		startPointY + tileHeight * 2.5 - tileDetailHeight / 3 - 1,
		'landscape',
		'trees_5.png'
	);
	scene.add.image(
		startPointX + tileWidth * 2,
		startPointY + tileHeight * 3,
		'landscape',
		'landscape_16.png'
	);
	scene.add.image(
		startPointX + tileWidth * 1.5 + 1,
		startPointY + tileHeight * 3.5 - 8,
		'landscape',
		'landscape_22.png'
	);
	scene.add.image(
		startPointX + tileWidth * 1.5 + 1,
		startPointY + tileHeight * 3.5 - 8 - tileTowerHeight * 1.25,
		'towers_brown',
		'tower_54.png'
	);
	scene.add.image(
		startPointX + tileWidth * 1.5 + 1,
		startPointY + tileHeight * 3.5 - 8 - tileTowerHeight * 2.3,
		'towers_brown',
		'tower_38.png'
	);
	scene.add.image(
		startPointX + tileWidth * 1.5 + 1,
		startPointY + tileHeight * 3.5 - 8 - tileTowerHeight * 3.8,
		'towers_brown',
		'tower_35.png'
	);
	scene.add.image(
		startPointX + tileWidth + 1,
		startPointY + tileHeight * 4 - 8,
		'landscape',
		'landscape_20.png'
	);
	scene.add.image(
		startPointX + tileWidth / 2,
		startPointY + tileHeight * 4.5,
		'landscape',
		'landscape_28.png'
	);
	scene.add.image(
		startPointX,
		startPointY + tileHeight * 5,
		'landscape',
		'landscape_28.png'
	);
	scene.add.image(
		startPointX,
		startPointY + tileHeight * 5 - tileTowerHeight,
		'towers_grey',
		'tower_26.png'
	);
	scene.add.image(
		startPointX,
		startPointY + tileHeight * 5 - tileTowerHeight * 2 - 4,
		'towers_grey',
		'tower_44.png'
	);
	scene.add.image(
		startPointX,
		startPointY + tileHeight * 5 - tileTowerHeight * 3 - 6,
		'towers_grey',
		'tower_48.png'
	);
	scene.add.image(
		startPointX,
		startPointY + tileHeight * 5 - tileTowerHeight * 4 - 23,
		'towers_grey',
		'tower_41.png'
	);
	scene.add.image(
		startPointX - tileWidth / 2,
		startPointY + tileHeight * 5.5,
		'landscape',
		'landscape_28.png'
	);
	scene.add.image(
		startPointX - tileWidth,
		startPointY + tileHeight * 6,
		'landscape',
		'landscape_32.png'
	);
	scene.add.image(
		startPointX - tileWidth * 1.5,
		startPointY + tileHeight * 6.5,
		'landscape',
		'landscape_37.png'
	);

	// Range Seven
	scene.add.image(
		startPointX + tileWidth * 3.5,
		startPointY + tileHeight * 2.5,
		'landscape',
		'landscape_37.png'
	);
	scene.add.image(
		startPointX + tileWidth * 3,
		startPointY + tileHeight * 3,
		'landscape',
		'landscape_28.png'
	);
	scene.add.image(
		startPointX + tileWidth * 2.5,
		startPointY + tileHeight * 3.5,
		'landscape',
		'landscape_26.png'
	);
	scene.add.image(
		startPointX + tileWidth * 2,
		startPointY + tileHeight * 4 - 8,
		'landscape',
		'landscape_23.png'
	);
	scene.add.image(
		startPointX + tileWidth * 1.5,
		startPointY + tileHeight * 4.5,
		'landscape',
		'landscape_38.png'
	);
	scene.add.image(
		startPointX + tileWidth,
		startPointY + tileHeight * 5,
		'landscape',
		'landscape_29.png'
	);
	scene.add.image(
		startPointX + tileWidth / 2,
		startPointY + tileHeight * 5.5,
		'landscape',
		'landscape_29.png'
	);
	scene.add.image(
		startPointX,
		startPointY + tileHeight * 6,
		'landscape',
		'landscape_29.png'
	);
	scene.add.image(
		startPointX - tileWidth / 2,
		startPointY + tileHeight * 6.5,
		'landscape',
		'landscape_07.png'
	);
	scene.add.image(
		startPointX - tileWidth,
		startPointY + tileHeight * 7,
		'landscape',
		'landscape_37.png'
	);

	// Range Eight
	scene.add.image(
		startPointX + tileWidth * 4,
		startPointY + tileHeight * 3,
		'landscape',
		'landscape_01.png'
	);
	scene.add.image(
		startPointX + tileWidth * 3.5,
		startPointY + tileHeight * 3.5,
		'landscape',
		'landscape_33.png'
	);
	scene.add.image(
		startPointX + tileWidth * 3,
		startPointY + tileHeight * 4,
		'landscape',
		'landscape_33.png'
	);
	scene.add.image(
		startPointX + tileWidth * 2.5,
		startPointY + tileHeight * 4.5,
		'landscape',
		'landscape_33.png'
	);
	scene.add.image(
		startPointX + tileWidth * 2,
		startPointY + tileHeight * 5,
		'landscape',
		'landscape_04.png'
	);
	scene.add.image(
		startPointX + tileWidth * 1.5,
		startPointY + tileHeight * 5.5,
		'landscape',
		'landscape_33.png'
	);
	scene.add.image(
		startPointX + tileWidth,
		startPointY + tileHeight * 6,
		'landscape',
		'landscape_00.png'
	);
	scene.add.image(
		startPointX + tileWidth / 2,
		startPointY + tileHeight * 6.5 - tileDetailHeight / 3 + 2,
		'landscape',
		'trees_2.png'
	);
	scene.add.image(
		startPointX,
		startPointY + tileHeight * 7,
		'landscape',
		'landscape_28.png'
	);
	scene.add.image(
		startPointX - tileWidth / 2,
		startPointY + tileHeight * 7.5,
		'landscape',
		'landscape_37.png'
	);

	// Range Nine
	scene.add.image(
		startPointX + tileWidth * 4.5,
		startPointY + tileHeight * 3.5,
		'landscape',
		'landscape_28.png'
	);
	scene.add.image(
		startPointX + tileWidth * 4,
		startPointY + tileHeight * 4,
		'landscape',
		'landscape_28.png'
	);
	scene.add.image(
		startPointX + tileWidth * 3.5,
		startPointY + tileHeight * 4.5,
		'landscape',
		'rocks_5.png'
	);
	scene.add.image(
		startPointX + tileWidth * 3,
		startPointY + tileHeight * 5 - tileDetailHeight / 3 + 6,
		'landscape',
		'trees_3.png'
	);
	scene.add.image(
		startPointX + tileWidth * 2.5,
		startPointY + tileHeight * 5.5,
		'landscape',
		'landscape_32.png'
	);
	scene.add.image(
		startPointX + tileWidth * 2,
		startPointY + tileHeight * 6 - tileDetailHeight / 3 + 6,
		'landscape',
		'crystals_1.png'
	);
	scene.add.image(
		startPointX + tileWidth * 1.5,
		startPointY + tileHeight * 6.5,
		'landscape',
		'landscape_37.png'
	);
	scene.add.image(
		startPointX + tileWidth,
		startPointY + tileHeight * 7,
		'landscape',
		'landscape_28.png'
	);
	scene.add.image(
		startPointX + tileWidth,
		startPointY + tileHeight * 7 - tileTowerHeight,
		'towers_red',
		'tower_32.png'
	);
	scene.add.image(
		startPointX + tileWidth,
		startPointY + tileHeight * 7 - tileTowerHeight * 2 - 6,
		'towers_red',
		'tower_42.png'
	);
	scene.add.image(
		startPointX + tileWidth / 2,
		startPointY + tileHeight * 7.5,
		'landscape',
		'rocks_8.png'
	);
	scene.add.image(
		startPointX,
		startPointY + tileHeight * 8,
		'landscape',
		'landscape_37.png'
	);

	// Range Ten
	scene.add.image(
		startPointX + tileWidth * 5,
		startPointY + tileHeight * 4,
		'landscape',
		'landscape_31.png'
	);
	scene.add.image(
		startPointX + tileWidth * 4.5,
		startPointY + tileHeight * 4.5,
		'landscape',
		'landscape_29.png'
	);
	scene.add.image(
		startPointX + tileWidth * 4,
		startPointY + tileHeight * 5,
		'landscape',
		'landscape_29.png'
	);
	scene.add.image(
		startPointX + tileWidth * 3.5,
		startPointY + tileHeight * 5.5,
		'landscape',
		'landscape_29.png'
	);
	scene.add.image(
		startPointX + tileWidth * 3,
		startPointY + tileHeight * 6,
		'landscape',
		'landscape_07.png'
	);
	scene.add.image(
		startPointX + tileWidth * 2.5,
		startPointY + tileHeight * 6.5,
		'landscape',
		'landscape_28.png'
	);
	scene.add.image(
		startPointX + tileWidth * 2,
		startPointY + tileHeight * 7,
		'landscape',
		'landscape_37.png'
	);
	scene.add.image(
		startPointX + tileWidth * 1.5,
		startPointY + tileHeight * 7.5,
		'landscape',
		'landscape_28.png'
	);
	scene.add.image(
		startPointX + tileWidth,
		startPointY + tileHeight * 8,
		'landscape',
		'landscape_28.png'
	);
	scene.add.image(
		startPointX + tileWidth / 2,
		startPointY + tileHeight * 8.5,
		'landscape',
		'landscape_37.png'
	);

	// Range Eleven
	scene.add.image(
		startPointX + tileWidth * 5.5,
		startPointY + tileHeight * 4.5,
		'landscape',
		'landscape_35.png'
	);
	scene.add.image(
		startPointX + tileWidth * 5,
		startPointY + tileHeight * 5,
		'landscape',
		'landscape_29.png'
	);
	scene.add.image(
		startPointX + tileWidth * 4.5,
		startPointY + tileHeight * 5.5,
		'landscape',
		'landscape_29.png'
	);
	scene.add.image(
		startPointX + tileWidth * 4,
		startPointY + tileHeight * 6,
		'landscape',
		'landscape_29.png'
	);
	scene.add.image(
		startPointX + tileWidth * 3.5,
		startPointY + tileHeight * 6.5,
		'landscape',
		'landscape_29.png'
	);
	scene.add.image(
		startPointX + tileWidth * 3,
		startPointY + tileHeight * 7,
		'landscape',
		'landscape_29.png'
	);
	scene.add.image(
		startPointX + tileWidth * 2.5,
		startPointY + tileHeight * 7.5,
		'landscape',
		'landscape_01.png'
	);
	scene.add.image(
		startPointX + tileWidth * 2,
		startPointY + tileHeight * 8,
		'landscape',
		'landscape_33.png'
	);
	scene.add.image(
		startPointX + tileWidth * 1.5,
		startPointY + tileHeight * 8.5,
		'landscape',
		'landscape_33.png'
	);
	scene.add.image(
		startPointX + tileWidth,
		startPointY + tileHeight * 9,
		'landscape',
		'landscape_05.png'
	);
}
