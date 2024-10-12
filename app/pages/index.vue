<script setup lang="ts">
const config = useRuntimeConfig();

useSeoMeta({
	title: 'Home',
});

const {
	data: dexes,
	status,
	error,
} = await useLazyFetch<{ data: ApiGameDex[] }>(`${config.public.apiBase}/game-dexes`);
</script>

<template>
	<div class="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
		<article
			class="border-border-light dark:border-border-dark rounded-xl border bg-[#dce0e8] p-4 shadow-xl xl:col-span-3 dark:bg-[#11111b]"
		>
			<header class="mb-4 flex items-center justify-between">
				<h2 class="text-3xl font-bold">Available Dexes</h2>
			</header>
			<div class="grid gap-10 xl:grid-cols-3">
				<p v-if="status === 'pending'">Loading...</p>
				<section
					v-for="dex in dexes?.data"
					v-else
					:key="dex.slug"
					class="bg-light dark:bg-dark rounded-xl border border-blue-500"
				>
					<header class="flex items-center justify-between border-b border-blue-500">
						<div class="flex rounded-xl px-3 py-2 font-bold">
							<Icon name="ph:notebook" :size="24" class="mr-2 inline" />
							<span>{{ dex.name }}</span>
						</div>
						<button class="flex space-x-2 px-3 py-2 font-bold text-blue-500">
							<Icon name="ph:plus-bold" :size="24" />
							<span>Create</span>
						</button>
					</header>
					<div class="p-4">
						<p v-for="game in dex.games" :key="game.slug">{{ game.name }}</p>
					</div>
				</section>
				<div v-if="error">{{ error }}</div>
			</div>
		</article>
		<article
			class="border-border-light dark:border-border-dark rounded-xl border bg-[#dce0e8] p-4 shadow-xl dark:bg-[#11111b]"
		>
			<header class="mb-4 flex items-center justify-between">
				<h2 class="text-3xl font-bold">Updates</h2>
			</header>
			Gen 1-9 Support added!
		</article>
	</div>
</template>
