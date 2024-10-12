<script setup lang="ts">
const dialog = ref<HTMLDialogElement>();

defineProps<{ title: string }>();
</script>

<template>
	<dialog
		ref="dialog"
		class="bg-light text-text-light dark:bg-dark dark:text-text-dark fixed inset-0 left-0 top-0 w-full space-y-6 rounded-xl border border-blue-500 p-4 shadow-xl backdrop:bg-black backdrop:opacity-50 md:max-w-[40%] xl:max-w-[25%]"
	>
		<header class="flex justify-between border-b-2 border-blue-500 py-2">
			<h1 class="text-2xl font-bold">{{ title }}</h1>

			<form method="dialog" class="-mt-2">
				<button>
					<Icon name="ph:x" :size="24" />
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
