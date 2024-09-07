<script setup lang="ts">
import Dialog from '@/components/Dialogs/Dialog.vue';
import { useDialog } from '@/composables/useDialog';
import CreateDexForm from '@/components/CreateDexForm.vue';

const { show, close } = useDialog('#create-dex-dialog');

defineExpose({ show, close });
</script>
<template>
	<Dialog title="Create Dex" id="create-dex-dialog">
		<CreateDexForm form-id="create-dex-form" />
		<template #footer>
			<button
				form="create-dex-form"
				type="reset"
				class="mr-4 rounded-xl px-4 py-2 font-bold hover:text-blue-500 hover:shadow-dark"
				@click="close"
			>
				Cancel
			</button>
			<button
				form="create-dex-form"
				class="rounded-xl border border-pink-500 px-4 py-2 font-bold text-pink-500 hover:bg-pink-500 hover:text-white hover:shadow-dark"
				@click="close"
			>
				Create
			</button>
		</template>
	</Dialog>
</template>
