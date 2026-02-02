import { ChampionPick } from './champion';
import { Team } from './draft';

export interface Recommendation {
  champion: string;
  role: string;
  winRate: number;
  reason: string;
  aiReasoning?: string;
  matchupAdvantage?: string;
  synergy?: string[];
  counters?: string[];
}

export interface EnemyPrediction {
  champion: string;
  probability: number;
  reason: string;
}

export interface DraftAnalysis {
  winRate: number;
  recommendations: Recommendation[];
  enemyPredictions: EnemyPrediction[];
  teamComposition: {
    strengths: string[];
    weaknesses: string[];
    damageTypes: {
      physical: number;
      magic: number;
    };
    frontline: boolean;
    engage: boolean;
    disengage: boolean;
  };
}

export interface GamePlan {
  winCondition: string;
  earlyGame: string;
  midGame: string;
  lateGame: string;
  keyMatchups: string[];
  objectives: string[];
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    code: string;
  };
}

export interface StartDraftRequest {
  teamBlue: string;
  teamRed: string;
}

export interface DraftActionRequest {
  side: Team;
  champion: string;
  role?: string;
}