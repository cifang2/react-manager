import { ConfigEnv, defineConfig, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig((mode: ConfigEnv): UserConfig => {
  // 读取配置文件
  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    base: mode.command === 'serve' ? '/' : './'
  }
})
