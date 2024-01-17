// Exporte une fonction qui prend l'objet de la scène comme argument
export function preloadAssets(scene) {
	scene.load.atlasXML(
		'landscape',
		'assets/landscape_sheet.png',
		'assets/landscape_sheet.xml'
	);
	scene.load.atlasXML(
		'towers_brown',
		'assets/towers_brown_sheet.png',
		'assets/towers_brown_sheet.xml'
	);
	scene.load.atlasXML(
		'towers_grey',
		'assets/towers_grey_sheet.png',
		'assets/towers_grey_sheet.xml'
	);
	scene.load.atlasXML(
		'towers_red',
		'assets/towers_red_sheet.png',
		'assets/towers_red_sheet.xml'
	);
}
