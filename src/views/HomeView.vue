<script setup lang="ts">
import Modal from '@/components/Modal.vue';
import { PhPlus } from '@phosphor-icons/vue';
import { ref } from 'vue';

const modal = ref<InstanceType<typeof Modal>>();

let showModal = ref(false);
</script>

<template>
	<header class="mb-6 flex items-center justify-between">
		<h1 class="text-2xl font-bold">Your Dexes</h1>
		<button
			class="hover:shadow-dark flex items-center rounded-xl border border-pink-500 px-4 py-2 font-bold text-pink-500 hover:bg-pink-500 hover:text-white"
			@click="showModal = !showModal"
		>
			New Dex <PhPlus :size="24" class="ml-2 inline" />
		</button>
	</header>

	<section>
		You don't have any dexes.
		<button class="font-bold text-pink-500" @click="showModal = !showModal">Why not create one.</button>
	</section>

	<!-- TODO: Extract this to a specific "CreateDexModal" component -->
	<Teleport to="body">
		<Modal title="Meow" :show="showModal" ref="modal">Meow woof banana</Modal>
	</Teleport>
</template>
