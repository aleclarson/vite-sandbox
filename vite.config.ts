import { UserConfig } from 'vite'
import reactPlugin from 'vite-plugin-react'

const config: UserConfig = {
  plugins: [reactPlugin],
  minify: false,
  sourcemap: true,
  env: {
    NODE_ENV: 'development',
  },
}

export default config
