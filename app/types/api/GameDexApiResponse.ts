export type ApiGameDex = {
	name: string;
	slug: string;
	game?: ApiGame[];
	type: string;
	pokemon?: Pokemon[];
};
