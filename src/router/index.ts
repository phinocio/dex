import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import NotFound from '@/views/errors/NotFound.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/:catchAll(.*)*',
			name: 'Not Found',
			component: NotFound,
		},
	],
});

export default router;
