<script setup lang="ts">
const config = useRuntimeConfig();
const nuxtApp = useNuxtApp();

useSeoMeta({
	title: 'Home',
});

const {
	data: dexes,
	status,
	error,
} = await useLazyFetch<{ data: ApiGameDex[] }>(`${config.public.apiBase}/game-dexes`, {
	headers: {
		Accept: 'application/json',
	},
	getCachedData(key) {
		return nuxtApp.payload.data[key] || nuxtApp.static.data[key];
	},
});
</script>

<template>
	<div class="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
		<article class="p-4 xl:col-span-3">
			<header class="mb-8">
				<h2 class="text-3xl font-bold">Available Dexes</h2>
			</header>
			<div class="grid gap-10 xl:grid-cols-2 2xl:grid-cols-3">
				<p v-if="status === 'pending'">Loading...</p>
				<section
					v-for="dex in dexes?.data"
					v-else
					:key="dex.slug"
					class="bg-light dark:bg-dark rounded-xl border-2 border-blue-500"
				>
					<header class="flex items-center justify-between border-b-2 border-blue-500">
						<div class="flex rounded-xl px-3 py-2 font-bold">
							<Icon name="ph:notebook" :size="24" class="mr-2 inline" />
							<span>{{ dex.name }}</span>
						</div>
						<button class="flex items-center px-3 py-2 font-bold text-pink-500">
							<span>Create</span>
							<Icon name="ph:plus-bold" :size="18" />
						</button>
					</header>
					<div class="p-4">
						<p v-for="game in dex.games" :key="game.slug">{{ game.name }}</p>
					</div>
				</section>
				<div v-if="error">{{ error }}</div>
			</div>
		</article>
		<article class="p-4">
			<header class="mb-8">
				<h2 class="text-3xl font-bold">Site Updates</h2>
			</header>
			Gen 1-9 Support added!
		</article>
	</div>
</template>
