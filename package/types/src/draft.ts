import { ChampionPick } from './champion';

export enum Team {
  BLUE = 'blue',
  RED = 'red'
}

export enum DraftPhase {
  BAN = 'ban',
  PICK = 'pick'
}

export enum DraftStatus {
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  ABANDONED = 'abandoned'
}

export interface DraftState {
  id: string;
  draftId: string;
  teamBlue: string;
  teamRed: string;
  currentPhase: DraftPhase;
  currentTurn: string; // e.g., "B_BAN_1", "R_PICK_2"
  turnNumber: number;
  bansBlue: string[];
  bansRed: string[];
  picksBlue: ChampionPick[];
  picksRed: ChampionPick[];
  winRateBlue: number; // 0-100
  status: DraftStatus;
  createdAt: Date;
  updatedAt?: Date;
}

export interface DraftAction {
  side: Team;
  champion: string;
  role?: string;
}

export interface DraftTurn {
  turn: string;
  side: Team;
  phase: DraftPhase;
  index: number;
}