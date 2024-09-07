interface Game {
	title: string;
	release_year: number;
	platform: string;
}

interface Generation {
	generation: number;
	name: string;
	games: Game[];
}

const Generations: Generation[] = [
	{
		generation: 1,
		name: 'Generation I',
		games: [
			{
				title: 'Red',
				release_year: 1996,
				platform: 'Game Boy',
			},
			{
				title: 'Blue',
				release_year: 1996,
				platform: 'Game Boy',
			},
			{
				title: 'Yellow',
				release_year: 1998,
				platform: 'Game Boy',
			},
		],
	},
	//{
	//	generation: 2,
	//	name: 'Generation II',
	//	games: [
	//		{
	//			title: 'Gold',
	//			release_year: 1999,
	//			platform: 'Game Boy Color',
	//		},
	//		{
	//			title: 'Silver',
	//			release_year: 1999,
	//			platform: 'Game Boy Color',
	//		},
	//		{
	//			title: 'Crystal',
	//			release_year: 2000,
	//			platform: 'Game Boy Color',
	//		},
	//	],
	//},
];

export default Generations;
