export enum Role {
    TOP = 'Top',
    JUNGLE = 'Jungle',
    MID = 'Mid',
    ADC = 'ADC',
    SUPPORT = 'Support'
  }
  
  export interface Champion {
    id: number;
    championId: string; // Riot's ID
    name: string;
    title: string;
    tags: string[]; // ["Fighter", "Tank"]
    imageUrl: string;
    winRate?: number;
    pickRate?: number;
    banRate?: number;
  }
  
  export interface ChampionPick {
    champion: string;
    role: Role;
    player?: string;
  }
  
  export interface ChampionStats {
    championName: string;
    gamesPlayed: number;
    wins: number;
    losses: number;
    winRate: number;
    avgKDA: number;
  }