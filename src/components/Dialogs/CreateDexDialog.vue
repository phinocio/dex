<script setup lang="ts">
import { PhGameController } from '@phosphor-icons/vue';
import { ref } from 'vue';
import Generations from '@/data/Generations';
import Dialog from '@/components/Dialogs/Dialog.vue';
import { useDialog } from '@/composables/useDialog';
import type { Dex } from '@/types/Dex';

const selectedGame = ref('');

const { show, close } = useDialog('#create-dex-dialog');

defineProps<{ dex: Dex[] }>();
defineExpose({ show, close });
</script>
<template>
	<Dialog title="Create Dex" id="create-dex-dialog">
		<p class="mb-4">You currently have {{ dex?.length }} dexes.</p>
		<label class="relative block">
			<PhGameController
				class="pointer-events-none absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 transform text-blue-500"
			/>
			<select
				name="game"
				v-model="selectedGame"
				class="w-full appearance-none rounded-full bg-gray-200 px-4 py-3 pl-14 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-[#26263a]"
			>
				<option value="">--Select a Game--</option>
				<hr />
				<optgroup v-for="generation in Generations" :label="generation.name">
					<option v-for="game in generation.games">{{ game.title }}</option>
				</optgroup>
			</select>
		</label>

		<br />
		You selected {{ selectedGame || 'none' }}
	</Dialog>
</template>
