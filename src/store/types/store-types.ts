export type TStoreState = {
  program?: TRaceProgram
  isPaused?: boolean;
  horses: THorse[];
  raceInterval: ReturnType<typeof setInterval> | null
}

export type TRaceStatus = "scheduled" | "ongoing" | "paused" | "completed";

export type THorse = {
  id: string;
  name: string;
  color: string;
  condition: number;
};

export type TRaceRound = {
  id: string;
  distance: number;
  currentHorsePositions: Record<string, number>;
  positions: string[];
  results?: string[];
  winnerId?: string;
  status: TRaceStatus;
};

export type TRaceProgram = {
  id: string;
  rounds: TRaceRound[];
};
