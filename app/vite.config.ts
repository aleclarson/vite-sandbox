import { UserConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

const config: UserConfig = {
  optimizeDeps: {
    include: ['react-responsive']
  },
  plugins: [
    reactRefresh(),
  ],
}

export default config
