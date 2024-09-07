import type { SpriteType } from '@/types/SpriteType';

export default function getSprite(sprite: SpriteType, id: number) {
	return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${sprite.generation}/${sprite.game}/${id}.png`;
}
