import { GAMES_DATA as GAMES_ARRAY } from '@/constants/games';

// Transform array to object for easier slug lookup
export const GAMES_DATA = GAMES_ARRAY.reduce((acc, game) => ({ ...acc, [game.id]: game }), {});
