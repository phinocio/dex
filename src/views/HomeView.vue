<script setup lang="ts">
import CreateDexDialog from '@/components/Dialogs/CreateDexDialog.vue';
import type { Dex } from '@/types/Dex';
import { PhPlus } from '@phosphor-icons/vue';
import { ref } from 'vue';

const dialog = ref<InstanceType<typeof CreateDexDialog>>();

let dexes: Dex[] = [
	{ name: 'my dex', game: 'blue' },
	{ name: 'my other dex', game: 'red' },
];
</script>

<template>
	<header class="mb-6 flex items-center justify-between">
		<h1 class="text-2xl font-bold">Your Dexes</h1>
		<button
			class="flex items-center rounded-xl border border-pink-500 px-4 py-2 font-bold text-pink-500 hover:bg-pink-500 hover:text-white hover:shadow-dark"
			@click="$refs.dialog?.show()"
		>
			New Dex <PhPlus :size="24" class="ml-2 inline" />
		</button>
	</header>

	<section>
		You don't have any dexes.
		<button class="font-bold text-pink-500" @click="$refs.dialog?.show()">Why not create one.</button>
	</section>

	<!-- TODO: Extract this to a specific "CreateDexModal" component -->
	<Teleport to="body">
		<CreateDexDialog ref="dialog" :dex="dexes" />
	</Teleport>
</template>
