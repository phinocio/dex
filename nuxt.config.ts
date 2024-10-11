// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	future: {
		compatibilityVersion: 4,
	},
	components: [
		{
			path: '~/components',
			pathPrefix: false,
		},
	],
	imports: {
		dirs: ['types', 'types/api'],
	},
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxt/eslint', '@nuxt/fonts', '@nuxt/icon', '@pinia/nuxt'],
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
