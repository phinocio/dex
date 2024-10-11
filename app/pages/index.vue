<script setup lang="ts">
const {
	data: dex,
	status,
	error,
} = await useLazyAsyncData<ApiGameDex>('rby-national', () =>
	$fetch('http://localhost:8000/v1/game-dexes/rby-national?include=pokemon'),
);
</script>

<template>
	<div>
		<header class="mb-12 flex items-center justify-between">
			<h1 class="text-2xl font-bold">Meow</h1>
			<button
				class="hover:shadow-dark flex items-center rounded-xl border border-pink-500 px-4 py-2 font-bold text-pink-500 hover:bg-pink-500 hover:text-white"
				@click="$router.push('/dexes/create')"
			>
				New Dex <Icon name="ph:pencil" :size="24" class="ml-2 inline" />
			</button>
		</header>

		<p v-if="status !== 'success'">Loading...</p>
		<p v-for="pokemon in dex?.data.pokemon" v-else :key="pokemon.id">{{ pokemon.name }}</p>
		<div v-if="error">{{ error }}</div>
	</div>
</template>
