export const GROUND_LEVEL = 300;
export const GRAVITY = 9.8;
export const INITIAL_GAME_SPEED = 5;
export const INITIAL_OBSTACLE_CREATION_RATE = 2000;

const gameSettings = {
	GAME_SPEED: INITIAL_GAME_SPEED,
	OBSTACLE_CREATION_RATE: INITIAL_OBSTACLE_CREATION_RATE,
};

export const increaseGameSpeed = () => {
	gameSettings.GAME_SPEED += 0.1;
	gameSettings.OBSTACLE_CREATION_RATE *= 0.99;
};

export const resetGameSpeed = () => {
	gameSettings.GAME_SPEED = INITIAL_GAME_SPEED;
	gameSettings.OBSTACLE_CREATION_RATE = INITIAL_OBSTACLE_CREATION_RATE;
};

export { gameSettings };
