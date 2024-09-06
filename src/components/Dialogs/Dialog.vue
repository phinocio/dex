<script setup lang="ts">
import { ref, watch } from 'vue';

let dialog = ref<HTMLDialogElement>();

const props = defineProps({
	title: String,
	show: Boolean,
});

watch(
	() => props.show,
	() => {
		dialog.value?.showModal();
	},
);
</script>

<template>
	<dialog
		ref="dialog"
		class="fixed inset-0 left-0 top-0 w-full max-w-[40%] space-y-4 rounded-xl border border-blue-500 bg-light p-4 text-text-light shadow-xl backdrop:bg-black backdrop:opacity-50 dark:bg-dark dark:text-text-dark"
	>
		<header class="border-b-2 border-blue-500 py-2">
			<h1 class="text-2xl font-bold">{{ title }}</h1>
		</header>

		<div>
			<slot>Meow</slot>
		</div>

		<footer>
			<form method="dialog">
				<button class="rounded-full bg-blue-500 px-4 py-2 text-white focus:outline-1">Close</button>
			</form>
		</footer>
	</dialog>
</template>
