// @ts-expect-error - missing types
import vituum from 'vituum'
// @ts-expect-error - missing types
import handlebars from '@vituum/vite-plugin-handlebars'
import {defineConfig} from "vite"

export default defineConfig({
  plugins: [
    vituum(),
    handlebars()
  ],
  css: {
    devSourcemap: true
  }
})
