import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';
import type { Dex } from '@/types/Dex';

export const useDexStore = defineStore('dexStore', () => {
	const dexes = useLocalStorage<Map<string, Dex>>('dexes', new Map());

	function addDex(name: string, game: string): void {
		dexes.value.set(crypto.randomUUID(), { name, game });
	}

	function getDex(id: string): Dex | undefined {
		return dexes.value.get(id);
	}

	function deleteDex(id: string): void {
		dexes.value.delete(id);
	}

	return { dexes, addDex, deleteDex, getDex };
});
