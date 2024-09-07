export type SpriteType =
	| { generation: 'generation-i'; game: 'red-blue' | 'yellow' }
	| { generation: 'generation-ii'; game: 'gold' | 'silver' | 'crystal' }
	| { generation: 'generation-iii'; game: 'ruby-sapphire' | 'emerald' | 'firered-leafgreen' }
	| { generation: 'generation-iv'; game: 'diamond-pearl' | 'heartgold-soulsilver' | 'platinum' }
	| { generation: 'generation-v'; game: 'black-white' }
	| { generation: 'generation-vi'; game: 'x-y' | 'omega-ruby-alpha-sapphire' }
	| { generation: 'generation-vii'; game: 'ultra-sun-ultra-moon' };
