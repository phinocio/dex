import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';
import type { Dex } from '@/types/Dex';
import getSprite from '@/lib/utils/getSprite';

export const useDexStore = defineStore('dexStore', () => {
	const dexes = useLocalStorage<Map<string, Dex>>('dexes', new Map());

	function addDex(dex: Dex): void {
		dex.pokemon = [
			{
				id: 1,
				name: 'bulbasaur',
				caught: false,
				needsEvolution: false,
				sprite: getSprite(dex.spriteType, 1),
			},
		];

		dexes.value.set(crypto.randomUUID(), dex);
	}

	function getDex(id: string): Dex | undefined {
		return dexes.value.get(id);
	}

	function deleteDex(id: string): void {
		dexes.value.delete(id);
	}

	return { dexes, addDex, deleteDex, getDex };
});
