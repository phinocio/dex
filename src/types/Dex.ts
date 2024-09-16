import type { Pokemon } from '@/types/Pokemon';
import type { SpriteType } from '@/types/SpriteType';
import type { Generation } from '@/types/Generation';

export type Dex = {
	name: string;
	game: string;
	type: 'national' | 'regional' | 'generation';
	generation?: Generation;
	shinyDex: boolean;
	spriteType: SpriteType;
	pokemon?: Pokemon[];
};
