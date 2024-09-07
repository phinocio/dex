<script setup lang="ts">
import { PhGameController, PhIdentificationBadge, PhImage, PhSparkle } from '@phosphor-icons/vue';
import { reactive } from 'vue';
import Generations from '@/stores/GenerationStore';
import { useDexStore } from '@/stores/DexStore';
import SpriteTypes from '@/stores/SpriteTypeStore';
import type { Dex } from '@/types/Dex';
import type { SpriteType } from '@/types/SpriteType';

const dexStore = useDexStore();

const initialData = {
	name: '',
	game: '',
	dexType: 'national' as const,
	shinyDex: false,
	spriteType: {
		generation: 'generation-i',
		game: 'red-blue',
	} as SpriteType,
};

let form = reactive<Dex>({ ...initialData });

const submit = () => {
	dexStore.addDex({ ...form });
	Object.assign(form, initialData);
};

defineProps<{
	formId: string;
}>();
</script>

<template>
	<form class="flex flex-col space-y-6" :id="formId" @submit.prevent="submit">
		<div class="font-bold">
			<span class="pl-4">Dex Name</span>
			<label class="relative mt-2 block">
				<PhIdentificationBadge
					class="pointer-events-none absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 transform text-blue-500"
				/>
				<input
					name="dex-name"
					v-model="form.name"
					class="w-full appearance-none rounded-full border border-border-light bg-gray-200 px-4 py-3 pl-14 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-border-dark dark:bg-[#26263a]"
					placeholder="My new dex..."
				/>
			</label>
		</div>
		<div class="font-bold">
			<span class="pl-4">Game</span>

			<label class="relative mt-2 block">
				<PhGameController
					class="pointer-events-none absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 transform text-blue-500"
				/>
				<select
					name="game"
					v-model="form.game"
					class="w-full appearance-none rounded-full border border-border-light bg-gray-200 px-4 py-3 pl-14 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-border-dark dark:bg-[#26263a]"
				>
					<option value="">--Select a Game--</option>
					<hr />
					<optgroup v-for="generation in Generations" :label="generation.name">
						<option v-for="game in generation.games">{{ game.title }}</option>
					</optgroup>
				</select>
			</label>
		</div>

		<div class="font-bold">
			<span class="pl-4">Sprite Type</span>
			<label class="relative mt-2 block">
				<PhImage
					class="pointer-events-none absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 transform text-blue-500"
				/>
				<select
					name="game"
					v-model="form.spriteType"
					class="w-full appearance-none rounded-full border border-border-light bg-gray-200 px-4 py-3 pl-14 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-border-dark dark:bg-[#26263a]"
				>
					<option v-for="spriteType in SpriteTypes" :value="spriteType">{{ spriteType.game }}</option>
				</select>
			</label>
		</div>

		<label class="flex items-center space-x-2 self-end">
			<input type="checkbox" name="shiny-dex" v-model="form.shinyDex" class="curspor-pointer h-5 w-5" />
			<span
				>Shiny
				<PhSparkle :size="24" class="inline text-yellow-500 dark:text-yellow-400" />
			</span>
		</label>
	</form>
</template>
