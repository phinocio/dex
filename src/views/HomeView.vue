<script setup lang="ts">
import CreateDexDialog from '@/components/Dialogs/CreateDexDialog.vue';
import { PhPlus } from '@phosphor-icons/vue';
import { ref } from 'vue';
import { useDexStore } from '@/stores/DexStore';
import Dexes from '@/components/Dexes.vue';

let dexStore = useDexStore();

const dialog = ref<InstanceType<typeof CreateDexDialog>>();
</script>

<template>
	<header class="mb-12 flex items-center justify-between">
		<h1 class="text-2xl font-bold">
			Your Dexes <small class="text-md">({{ dexStore.dexes.size }})</small>
		</h1>
		<button
			class="flex items-center rounded-xl border border-pink-500 px-4 py-2 font-bold text-pink-500 hover:bg-pink-500 hover:text-white hover:shadow-dark"
			@click="$refs.dialog?.show()"
		>
			New Dex <PhPlus :size="24" class="ml-2 inline" />
		</button>
	</header>

	<section v-if="dexStore.dexes.size === 0">
		You don't have any dexes.
		<button class="font-bold text-pink-500" @click="$refs.dialog?.show()">Why not create one.</button>
	</section>

	<article v-else class="grid grid-cols-3 gap-10">
		<Dexes />
	</article>

	<Teleport to="body">
		<CreateDexDialog ref="dialog" />
	</Teleport>
</template>
