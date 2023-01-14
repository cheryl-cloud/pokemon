export interface GameIndex {
    game_index: number;
    version: PokeInfo
  }
  
  export interface PokeInfo {
    name: string;
    url: string;
  }
  
  export type PokesData = {
    count: number,
    next: string | null,
    previous: string | null,
    results: PokeInfo[]
  }
  
  export interface PokemonData {
    abilite: unknown[];
    base_experience: number;
    forms: PokeInfo[];
    game_indices: GameIndex[];
    height: number;
    held_items: unknown[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: unknown[];
    name: string;
    order: number;
    past_types: unknown[];
    species: PokeInfo;
    sprites: {
      back_default: string;
      back_female: string | null;
      back_shiny: string;
      back_shiny_female: string | null;
      front_default: string;
      front_female: string | null;
      front_shiny: string;
      front_shiny_female: string | null;
      other: {
        dream_world: {
          front_default: string;
          front_female: string | null;
        };
        home: {
          front_default: string;
          front_female: string | null;
          front_shiny: string;
          front_shiny_female: string | null;
        };
        "official-artwork": {
          front_default: string;
          front_shiny: string | null;
        };
      };
      versions: unknown;
    };
    stats: unknown[];
    type: unknown[];
    weight: number;
  }