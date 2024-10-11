export type ApiGameDex = {
	name: string;
	slug: string;
	type: string;
	game?: ApiGame[];
	pokemon?: Pokemon[];
	links: {
		self: string;
	};
};
