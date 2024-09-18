import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';
import type { Dex } from '@/types/Dex';
import getSprite from '@/lib/utils/getSprite';
import { usePokeApi } from '@/composables/usePokeApi';
import type { Pokemon } from '@/types/Pokemon';

const pokeApi = usePokeApi();

export const useDexStore = defineStore('dexStore', () => {
	const dexes = useLocalStorage<Map<string, Dex>>('dexes', new Map());

	async function addDex(dex: Dex): Promise<void> {
		// Determine generation and if it's national/regional/generation dex
		const generation = await pokeApi.getGenerationFromGame(dex.game);

		//if (dex.type === 'generation') {
		const dexPokemon = await pokeApi.getGenerationDex(generation);
		console.log(dexPokemon.pokemon_species);
		//}

		// Populate the dex with mons
		dex.pokemon = await Promise.all(
			dexPokemon.map(async (pokemon: Pokemon) => {
				const pokemonData = await pokeApi.getPokemon(pokemon.name);
				return {
					id: pokemonData.id,
					name: pokemonData.name,
					caught: false,
					needsEvolution: false,
					sprite: getSprite(dex.spriteType, pokemonData.id),
				};
			}),
		);

		dexes.value.set(crypto.randomUUID(), dex);
	}

	function getDex(id: string): Dex | undefined {
		return dexes.value.get(id);
	}

	function updateDex(id: string, dex: Dex): void {
		dexes.value.set(id, dex);
	}

	function deleteDex(id: string): void {
		dexes.value.delete(id);
	}

	return { dexes, addDex, deleteDex, getDex, updateDex };
});
