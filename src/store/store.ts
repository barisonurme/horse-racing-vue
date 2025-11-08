import { createStore, Store } from 'vuex'
import type { THorse, TRaceProgram, TRaceRound, TStoreState } from './types/store-types'
import { generateHorseName, generateUniqueColors } from '@/utils/random-generator';
import type { InjectionKey } from 'vue';

/**
 * CONSTANTS
 * These values control the structure and rules of the hippodrome race.
 */

export const HIPPODROME_HORSE_COUNT = 20;
export const HIPPODROME_HORSE_PER_RACE = Math.min(10, HIPPODROME_HORSE_COUNT); // We added HIPPODROME_HORSE_COUNT to easily change horse count in future
export const HIPPODROME_RACE_INTERVAL_SECONDS = 30;
export const HIPPODROME_LAP_DISTANCES = [1200, 1400, 1600, 2000, 2200, 2400];
export const HIPPODROME_LAP_DISTANCE_MULTIPLIER = 500


/**
 * 
 * TODO
 * Is horse condition should effect speed by time?
 * Right now it is just effecting horse speed entire run
 * It could be interesting to make it a factor over time
 * like: export const HIPPODROME_CONDITION_DEBUFF_MULTIPLYER
 * 
 */



/**
 * HORSE COLORS
 * Pre-generate horses with unique colors
 */
const usedColors = new Set<string>();
const horses: THorse[] = Array.from({ length: HIPPODROME_HORSE_COUNT }, () => ({
  id: crypto.randomUUID(),
  name: generateHorseName(),
  color: generateUniqueColors({ usedColors }),
  condition: Math.floor(Math.random() * 100) + 1
}));


/**
 * POSITIONS - GENERATE
 * Generate initial positions for each round
 */
const generatePositions = () => {
  const count = Math.min(HIPPODROME_HORSE_PER_RACE, horses.length)
  const shuffled = [...horses].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count).map(h => h.id)
}


/** 
* POSITIONS - GENERATE
* Generate Each round with HIPPODROME_LAP_DISTANCES
*/

const generateLaps = () => {
  const newProgram: TRaceRound[] = [];
  for (let i = 0; i < HIPPODROME_LAP_DISTANCES.length; i++) {
    const lapLength = HIPPODROME_LAP_DISTANCES[i];

    if (lapLength === undefined) continue;

    const horse = horses?.[i];
    const horsePositions = horse ? { [horse.id]: 0 } : {};

    newProgram.push({
      id: crypto.randomUUID(),
      distance: lapLength,
      positions: generatePositions(),
      status: 'scheduled',
      currentHorsePositions: horsePositions
    });
  }
  return newProgram;
}

/**
 * PROGRAM - GENERATE
 * Generate Race Program 
 * */
const generateRaceProgram = (): TRaceProgram => {
  return ({
    id: crypto.randomUUID(),
    rounds: generateLaps()
  });
}

/**
 * STORE | Vuex Store 
 * */
export const store = createStore<TStoreState>({
  state: () => ({
    program: undefined as unknown as TRaceProgram,
    horses: horses,
    isPaused: true, // Add pause state
    raceInterval: null as ReturnType<typeof setInterval> | null
  }),
  mutations: {

    // GENERATE RACE PROGRAM
    generateRaceProgram(state) {
      state.program = generateRaceProgram();
    },

    // START ROUND
    startFirstRound(state) {
      if (!state.program) return;

      // Find the first round with 'scheduled' status
      const firstScheduledRound = state.program.rounds.find(round => round.status === 'scheduled');

      if (firstScheduledRound) {
        firstScheduledRound.status = 'ongoing';

        // Initialize all horses' positions for this round
        firstScheduledRound.positions.forEach((horseId) => {
          firstScheduledRound.currentHorsePositions[horseId] = 0;
        });
      }
    },

    // PAUSE TOGGLE
    setPaused(state, isPaused: boolean) {
      state.isPaused = isPaused;
    },

    // SETTING RACE INTERVAL
    setRaceInterval(state, interval: ReturnType<typeof setInterval> | null) {
      state.raceInterval = interval;
    },

    // CLEARING RACE INTERVAL
    clearRaceInterval(state) {
      if (state.raceInterval) {
        clearInterval(state.raceInterval);
        state.raceInterval = null;
      }
    },
  },
  actions: {
    runRound({ state, commit }) {
      if (state.isPaused) return; // Don't run if paused

      const round = state.program?.rounds.find(r => r.status === 'ongoing');
      if (!round) return;

      // Initialize results array if it doesn't exist
      if (!round.results) {
        round.results = [];
      }

      // Move each horse that hasn't finished
      round.positions.forEach((horseId) => {
        // Skip horses that already finished
        if (round.results && round.results.includes(horseId)) return;

        const currentPosition = round.currentHorsePositions[horseId] ?? 0;
        if (currentPosition < round.distance) {
          const horseCondition = state.horses.find(h => h.id === horseId)?.condition || 0;
          const newPosition = currentPosition + horseCondition / HIPPODROME_LAP_DISTANCE_MULTIPLIER;
          round.currentHorsePositions[horseId] = newPosition;

          // Check if horse just finished in this round
          if (newPosition >= round.distance && round.results && !round.results.includes(horseId)) {
            round.results.push(horseId);

            // Set winner if it's the first horse to finish
            if (!round.winnerId) {
              round.winnerId = horseId;
            }

          }
        }
      });

      // Mark round as completed if everyone finished
      if (round.results.length === round.positions.length) {
        round.status = 'completed';
        state.isPaused = true;
        commit('clearRaceInterval'); // Stop the interval when round completes
      }
    },

    // Action to start the race with interval
    startRace({ commit, dispatch }) {
      commit('setPaused', false);

      // Clear any existing interval
      commit('clearRaceInterval');

      // Start first round if not already started
      commit('startFirstRound');

      // Set up the race interval
      const interval = setInterval(() => {
        dispatch('runRound');
      }, 100 / HIPPODROME_LAP_DISTANCE_MULTIPLIER * 2);

      commit('setRaceInterval', interval);
    },

    // Action to toggle pause
    togglePause({ commit, state, dispatch }) {
      const newPausedState = !state.isPaused;
      commit('setPaused', newPausedState);

      if (newPausedState) {
        commit('clearRaceInterval');
      } else {
        // Resume the race
        const interval = setInterval(() => {
          dispatch('runRound');
        }, 100 / HIPPODROME_LAP_DISTANCE_MULTIPLIER * 2);
        commit('setRaceInterval', interval);
      }

      return newPausedState;
    },

    // Action to stop race completely
    stopRace({ commit }) {
      commit('clearRaceInterval');
      commit('setPaused', false);
    }
  }
})

export const key: InjectionKey<Store<TStoreState>> = Symbol()