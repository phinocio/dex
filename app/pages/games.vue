<script setup lang="ts">
const config = useRuntimeConfig();

useSeoMeta({
	title: 'Games',
});

const { data: games, status, error } = await useLazyFetch<{ data: ApiGame }>(`${config.public.apiBase}/games`);
</script>
<template>
	<div>
		<header class="mb-12 flex items-center justify-between">
			<h1 class="text-3xl font-bold">Games</h1>
		</header>
		<p v-if="status === 'pending'">Loading...</p>
		<p v-for="game in games?.data" v-else :key="game.slug">{{ game.name }}</p>
		<div v-if="error">{{ error }}</div>
	</div>
</template>
