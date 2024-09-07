interface Generation {
	generation:
		| 'generation-i'
		| 'generation-ii'
		| 'generation-iii'
		| 'generation-iv'
		| 'generation-v'
		| 'generation-vi'
		| 'generation-vii'
		| 'generation-ix';
	name: string;
	games: { title: string }[];
}

const Generations: Generation[] = [
	{
		generation: 'generation-i',
		name: 'Generation I',
		games: [
			{
				title: 'Red',
			},
			{
				title: 'Blue',
			},
			{
				title: 'Yellow',
			},
		],
	},
	{
		generation: 'generation-ii',
		name: 'Generation II',
		games: [
			{
				title: 'Gold',
			},
			{
				title: 'Silver',
			},
			{
				title: 'Crystal',
			},
		],
	},
];

export default Generations;
