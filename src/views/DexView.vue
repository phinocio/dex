<script setup lang="ts">
import { useDexStore } from '@/stores/DexStore';
import type { Pokemon } from '@/types/Pokemon';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const dexStore = useDexStore();
const route = useRoute();

const dex = dexStore.getDex(route.params.id as string);
const boxSize = 30;

const boxes = computed(() => {
	return dex?.pokemon?.reduce((resultArray, item, index) => {
		const chunkIndex = Math.floor(index / boxSize);
		if (!resultArray[chunkIndex]) {
			resultArray[chunkIndex] = [];
		}
		resultArray[chunkIndex].push(item);
		return resultArray;
	}, []) as Array<Array<Pokemon>>;
});

const getBoxName = computed(() => {
	return (boxIndex: number) => {
		const start = boxIndex * boxSize + 1;
		const end = Math.min((boxIndex + 1) * boxSize, dex?.pokemon?.length || 0);
		return `${start.toString().padStart(3, '0')}-${end.toString().padStart(3, '0')}`;
	};
});
</script>

<template>
	<header class="mb-4 flex items-baseline justify-between">
		<h1 class="text-2xl font-bold">
			{{ dex?.name }}
			<small class="">({{ dex?.pokemon?.filter((p) => p.caught).length }}/{{ dex?.pokemon?.length }})</small>
		</h1>
		<div class="flex space-x-2 font-bold capitalize text-white">
			<p class="rounded-full bg-pink-500 px-4 py-2">{{ dex?.game }}</p>
			<p class="rounded-full bg-pink-500 px-4 py-2">{{ dex?.type }}</p>
		</div>
	</header>
	<div class="grid grid-cols-1 gap-10 md:grid-cols-2">
		<article v-for="(box, index) in boxes" class="rounded-t-xl border border-border-light dark:border-border-dark">
			<header class="flex items-center justify-between p-4">
				<h2 class="text-2xl font-bold">
					{{ getBoxName(index) }}
					<small>({{ box.filter((p) => p.caught).length }}/{{ box.length }})</small>
				</h2>
				<button
					v-if="!box.every((p) => p.caught)"
					class="text-pink-500"
					@click="box.forEach((p) => (p.caught = true))"
				>
					Mark All
				</button>
				<button
					v-if="box.every((p) => p.caught)"
					class="text-pink-500"
					@click="box.forEach((p) => (p.caught = false))"
				>
					Unmark All
				</button>
			</header>
			<section class="grid grid-cols-1 md:grid-cols-6">
				<div
					v-for="pokemon in box"
					:key="pokemon.id"
					class="border border-border-light dark:border-border-dark"
					:class="{ 'bg-green-500 text-white': pokemon.caught }"
				>
					<div
						class="flex items-center justify-between p-4 md:h-32 md:w-32 md:flex-col md:justify-center"
						@click="pokemon.caught = !pokemon.caught"
					>
						<p class="text-sm font-bold capitalize">#{{ pokemon.id.toString().padStart(3, '0') }}</p>
						<img :src="pokemon.sprite" :alt="pokemon.name" class="h-16 w-16" />
						<p class="text-sm font-bold capitalize">
							{{ pokemon.name }}
						</p>
					</div>
				</div>
			</section>
		</article>
	</div>
</template>
