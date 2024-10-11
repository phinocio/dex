export type ApiGame = {
	name: string;
	slug: string;
	generation?: GenerationResponse;
	national_dex?: NationalDex;
	regional_dex?: ApiRegionalDex;
	generational_dex?: ApiGenerationalDex;
	pokemon?: ApiPokemon[];
	links: {
		self: string;
	};
};
