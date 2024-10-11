export type ApiGeneration = {
	name: string;
	slug: string;
	new_pokemon: number;
	total_pokemon: number;
	games?: ApiGame[];
	pokemon?: ApiPokemon[];
	links: {
		self: string;
	};
};
