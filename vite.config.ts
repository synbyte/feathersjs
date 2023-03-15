import {defineConfig} from 'vite'
import {feathers} from 'feathers-vite'
import './server/HolidayBot'

// https://vitejs.dev/config/#async-config
export default defineConfig(async () => {
  const config = {
    plugins: [feathers()]
  }
  return config
})
