// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			titleTemplate: '%s | phinocio/dex',
		},
	},
	compatibilityDate: '2024-04-03',
	components: [
		{
			path: '~/components',
			pathPrefix: false,
		},
	],
	devtools: {
		enabled: true,

		timeline: {
			enabled: true,
		},
	},
	future: {
		compatibilityVersion: 4,
	},
	imports: {
		dirs: ['types', 'types/api'],
	},
	modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxt/eslint', '@nuxt/fonts', '@nuxt/icon', '@pinia/nuxt'],
	runtimeConfig: {
		public: {
			apiBase: process.env.BASE_URL || 'https://api.dex.phinoc.io',
		},
	},
	tailwindcss: {
		config: {
			theme: {
				extend: {
					colors: {
						text: {
							light: '#4c4f69',
							dark: '#cdd6f4',
						},
						border: {
							light: '#ccd0da',
							dark: '#313244',
						},
						light: '#eff1f5',
						dark: '#1e1e2e',
					},
				},
			},
		},
	},
});
