import type { Generation } from '@/types/Generation';

export function usePokeApi() {
	const baseUrl = 'https://pokeapi.co/api/v2';
	return {
		async getGenerationFromGame(game: string): Promise<any> {
			// Get version group by name, get generation from version group
			const res = await fetch(`${baseUrl}/version/${game.toLowerCase()}`);
			const versionGroup = await res.json();
			const res2 = await fetch(`${baseUrl}/version-group/${versionGroup.version_group.name}`);
			const generation = await res2.json();
			return generation.generation;
		},

		async getGenerationDex(generation: Generation): Promise<any> {
			const res = await fetch(`${baseUrl}/generation/${generation.name}`);
			const dex = await res.json();
			return dex.pokemon_species;
		},

		async getPokemon(id: string): Promise<any> {
			const res = await fetch(`${baseUrl}/pokemon/${id}`);
			return await res.json();
		},
	};
}
