export type ApiPokemon = {
	national_dex_number: number;
	name: string;
	slug: string;
	evolves_from?: Pokemon | null;
	forms?: ApiForm[] | null;
	games?: ApiGame[];
	generation?: ApiGeneration;
	sprites: ApiSprite[];
	links: {
		self: string;
	};
};
