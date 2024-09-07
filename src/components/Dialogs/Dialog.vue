<script setup lang="ts">
import { PhX } from '@phosphor-icons/vue';
import { ref } from 'vue';

let dialog = ref<HTMLDialogElement>();

defineProps({
	title: String,
});
</script>

<template>
	<dialog
		ref="dialog"
		class="fixed inset-0 left-0 top-0 w-full space-y-6 rounded-xl border border-blue-500 bg-light p-4 text-text-light shadow-xl backdrop:bg-black backdrop:opacity-50 md:max-w-[40%] dark:bg-dark dark:text-text-dark"
	>
		<header class="flex justify-between border-b-2 border-blue-500 py-2">
			<h1 class="text-2xl font-bold">{{ title }}</h1>

			<form method="dialog" class="-mt-2">
				<button>
					<PhX :size="24" />
				</button>
			</form>
		</header>

		<div>
			<slot>Meow</slot>
		</div>

		<footer class="text-right">
			<slot name="footer" />
		</footer>
	</dialog>
</template>
