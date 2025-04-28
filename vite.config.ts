import { ConfigEnv, defineConfig, loadEnv, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { warppEnv } from './src/utile/getEnv'
import viteCompression from 'vite-plugin-compression'//压缩的包

// https://vite.dev/config/
export default defineConfig((mode: ConfigEnv): UserConfig => {
  const env = loadEnv(mode.mode, process.cwd())
  const viteEnv = warppEnv(env)
  // 读取配置文件
  return {
    plugins: [react(),
    viteEnv.VITE_COMPRESS && viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
      deleteOriginFile: false,
      filter: /\.(js|mjs|json|css|html)$/,
    }),//配置打包压缩
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
      //创建一个@别名，__dirname是当前文件所在的目录
      //resolve是vite中的一个方法，会解析出@指向的绝对路径
    },
    server: {//这里直接使用env配置
      host: '0.0.0.0',
      port: viteEnv.VITE_PORT,
      open: viteEnv.VITE_OPEN,
      proxy: {
        // '/api': {
        //   target: viteEnv.VITE_PROXY,
        //   changeOrigin: true,
        //   rewrite: (path) => path.replace(/^\/api/, '')
        // }
      }
    },

    base: mode.command === 'serve' ? '/' : './',
    build: {
      outDir: 'dist',//打包后的目录
      minify: 'esbuild',//打包的方式，支持esbuild和terser，
      //minify:'terser',
      //teser可以去除console
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        },
      }
    }
  }
})
