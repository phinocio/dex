<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router';

const isActivePage = (routePath: string) => {
	const route = useRoute();

	return route.path === routePath;
};
</script>

<template>
	<header class="mb-6 border-b-2 border-blue-500">
		<nav class="container mx-auto flex items-center py-4 text-xl">
			<RouterLink to="/" class="mr-4 text-2xl font-bold text-blue-500">phinocio/dex</RouterLink>
			<ul class="flex space-x-2 font-bold">
				<li>
					<RouterLink
						to="/"
						:class="[
							isActivePage('/')
								? 'bg-pink-500 text-white'
								: 'hover:bg-blue-500 hover:text-white active:bg-blue-500 active:text-white',
							'rounded-xl px-4 py-2',
						]"
						>Home</RouterLink
					>
				</li>
				<li>
					<RouterLink
						to="/dexes"
						:class="[
							isActivePage('/dexes')
								? 'bg-pink-500 text-white'
								: 'hover:bg-blue-500 hover:text-white active:bg-blue-500 active:text-white',
							'rounded-xl px-4 py-2',
						]"
						>Dexes</RouterLink
					>
				</li>
				<li>
					<RouterLink
						to="/settings"
						:class="[
							isActivePage('/settings')
								? 'bg-pink-500 text-white'
								: 'hover:bg-blue-500 hover:text-white active:bg-blue-500 active:text-white',
							'rounded-xl px-4 py-2',
						]"
						>Settings</RouterLink
					>
				</li>
			</ul>
		</nav>
	</header>
</template>
