<script setup lang="ts">
const isActivePage = (routePath: string) => {
	const route = useRoute();

	return route.path === routePath;
};
</script>

<template>
	<header class="border-b-2 border-blue-500">
		<nav class="container mx-auto flex items-center py-4 text-xl">
			<NuxtLink to="/" class="mr-4 text-2xl font-bold text-blue-500">phinocio/dex</NuxtLink>
			<ul class="flex space-x-2 font-bold">
				<li>
					<NuxtLink
						to="/"
						:class="[
							isActivePage('/')
								? 'bg-pink-500 text-white'
								: 'hover:bg-blue-500 hover:text-white active:bg-blue-500 active:text-white',
							'rounded-xl px-4 py-2',
						]"
						>Home</NuxtLink
					>
				</li>
				<li>
					<NuxtLink
						to="/dexes"
						:class="[
							isActivePage('/dexes')
								? 'bg-pink-500 text-white'
								: 'hover:bg-blue-500 hover:text-white active:bg-blue-500 active:text-white',
							'rounded-xl px-4 py-2',
						]"
						>Dexes</NuxtLink
					>
				</li>
			</ul>
		</nav>
	</header>
</template>
