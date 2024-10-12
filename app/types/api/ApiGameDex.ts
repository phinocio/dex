export type ApiGameDex = {
	name: string;
	slug: string;
	type: string;
	games?: ApiGame[];
	pokemon?: Pokemon[];
	links: {
		self: string;
	};
};
