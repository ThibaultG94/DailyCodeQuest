/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'box-color': '#22C55E',
				'button-color': '#EF4444',
			},
			width: {
				'custom-box': '700px',
				'custom-message': '600px',
			},
		},
	},
	plugins: [],
};
