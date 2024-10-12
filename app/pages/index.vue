<script setup lang="ts">
const config = useRuntimeConfig();

useSeoMeta({
	title: 'Home',
});

const {
	data: dex,
	status,
	error,
} = await useLazyFetch<{ data: ApiGameDex }>(`${config.public.apiBase}/game-dexes/rby-national?include=pokemon`);
</script>

<template>
	<div>
		<header class="mb-12 flex items-center justify-between">
			<h1 class="text-3xl font-bold">Your Dexes <small class="font-normal">(0)</small></h1>
			<button
				class="hover:shadow-dark flex items-center rounded-xl border border-pink-500 px-4 py-2 font-bold text-pink-500 hover:bg-pink-500 hover:text-white"
				@click="$router.push('/dexes/create')"
			>
				New Dex <Icon name="ph:pencil" :size="24" class="ml-2 inline" />
			</button>
		</header>

		<p v-if="status === 'pending'">Loading...</p>
		<p v-for="pokemon in dex?.data.pokemon" v-else :key="pokemon.id">{{ pokemon.name }}</p>
		<div v-if="error">{{ error }}</div>
	</div>
</template>
