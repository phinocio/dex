<script setup lang="ts">
import { PhPencil, PhTrash } from '@phosphor-icons/vue';
import { useDexStore } from '@/stores/DexStore';
import { RouterLink } from 'vue-router';

const dexStore = useDexStore();
</script>

<template>
	<section
		v-for="[id, dex] in dexStore.dexes.entries()"
		:key="id"
		class="rounded-xl border border-blue-500 bg-light p-4 text-text-light shadow-xl dark:bg-dark dark:text-text-dark"
	>
		<header class="flex items-center justify-between">
			<h2 class="text-2xl font-bold">{{ dex.name }}</h2>
			<span class="space-x-2">
				<button class="font-bold text-blue-400">
					<RouterLink :to="`/dexes/${id}`">
						<PhPencil :size="24" />
					</RouterLink>
				</button>
				<button class="font-bold text-pink-500" @click="dexStore.deleteDex(id)">
					<PhTrash :size="24" />
				</button>
			</span>
		</header>
		<p>{{ dex.game }}</p>
	</section>
</template>
