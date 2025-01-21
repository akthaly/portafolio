/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				europagrotesk: ['EuropaGrotesk', 'sans-serif'],
				exo: ['"Exo 2"', 'sans-serif'],
				dosis: ['Dosis', 'sans-serif'],
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
