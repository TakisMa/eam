import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify, {transformAssetUrls} from "vite-plugin-vuetify";
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		vue({
			template: {
				transformAssetUrls
			}
		}),
		vuetify({
			styles: {configFile: fileURLToPath(new URL("./src/assets/styles/settings.scss", import.meta.url))}
		}),
		vueDevTools(),
	],

	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			"@node_modules": fileURLToPath(new URL("./node_modules", import.meta.url))
		}
	},

	css: {
		preprocessorOptions: {
			scss: {
				additionalData(source, fp) {
					// All scss files ending with imports.scss
					// will not re-import additionalData
					if (fp.endsWith("main.scss")) {
						return source;
					}
					// Use additionalData from legacy nuxt scss options
					return `@import "@/assets/styles/main.scss"; ${source}`
				}
			}
		}
	},

	server: {
		port: "8080"
	},

	preview: {
		port: "8080"
	}
})
