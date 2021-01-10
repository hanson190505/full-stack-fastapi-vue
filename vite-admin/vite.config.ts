import type { UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

function pathResolve(dir: string) {
	return resolve(__dirname, '.', dir)
}

const alias: Record<string, string> = {
	'/@/': pathResolve('src')
}

export default (mode: 'development' | 'production'): UserConfig => {
	return {
		plugins: [vue()],
		server: {
			port: 3030
		}
	}
}
