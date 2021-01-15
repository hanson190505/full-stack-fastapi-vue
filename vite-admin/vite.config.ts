import type { UserConfig, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { loadEnv } from "vite";
import { wrapperEnv } from "./builder/utils";

function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir)
}

const root: string = process.cwd();

export default ({command, mode}: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, root)
  const viteEnv = wrapperEnv(env)
  const {VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY, VITE_DROP_CONSOLE, VITE_LEGACY} = viteEnv;
  return {
    plugins: [vue()],
    server: {
      port: VITE_PORT,
      hmr: {
        overlay: true
      }
    },
    alias: {
      '@/': `${pathResolve('src')}/`,
    },
  }
}
