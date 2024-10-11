export type ApiGame = {
	name: string;
	slug: string;
	generation?: ApiGeneration;
	dexes?: ApiGameDex[];
	national_dex?: ApiNationalDex;
	regional_dex?: ApiRegionalDex;
	generational_dex?: ApiGenerationalDex;
	pokemon?: ApiPokemon[];
	links: {
		self: string;
	};
};
