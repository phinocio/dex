<script setup lang="ts">
import CreateDexDialog from '@/components/Dialogs/CreateDexDialog.vue';
import { PhPlus, PhTrash, PhPencil } from '@phosphor-icons/vue';
import { ref } from 'vue';
import { useDexStore } from '@/stores/DexStore';

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
		<section
			v-for="[id, dex] in dexStore.dexes.entries()"
			:key="id"
			class="rounded-xl border border-blue-500 bg-light p-4 text-text-light shadow-xl dark:bg-dark dark:text-text-dark"
		>
			<header class="flex items-center justify-between">
				<h2 class="text-2xl font-bold">{{ dex.name }}</h2>
				<span class="space-x-2">
					<button class="font-bold text-blue-400" @click="dexStore.deleteDex(id)">
						<PhPencil :size="24" />
					</button>
					<button class="font-bold text-pink-500" @click="dexStore.deleteDex(id)">
						<PhTrash :size="24" />
					</button>
				</span>
			</header>
			<p>{{ dex.game }}</p>
		</section>
	</article>

	<Teleport to="body">
		<CreateDexDialog ref="dialog" />
	</Teleport>
</template>
