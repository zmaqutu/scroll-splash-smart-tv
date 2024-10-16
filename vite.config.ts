import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';


// https://vitejs.dev/config/
export default defineConfig({
	base: '/scroll-splash-smart-tv/',
	plugins: [react()],
	css: {
		postcss: {
			plugins: [tailwindcss()],
		},
	},
});
