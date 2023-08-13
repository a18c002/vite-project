import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint';
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      include: ['src/**/*.ts', 'src/**/*.vue', 'src/*.ts', 'src/*.vue'],
    }),
  ],
  resolve: {
		alias: {
			'@': '/src',
		},
	},
})
