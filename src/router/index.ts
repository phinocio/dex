import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('@/views/HomeView.vue'),
		},
		{
			path: '/dexes/:id',
			name: 'Dex',
			component: () => import('@/views/DexView.vue'),
		},
		{
			path: '/:catchAll(.*)*',
			name: 'Not Found',
			component: () => import('@/views/errors/NotFound.vue'),
		},
	],
});

export default router;
