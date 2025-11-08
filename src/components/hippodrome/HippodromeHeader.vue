<template>
    <div class="title-wrapper">
        <div class="title-desc-wrapper">
            <n-h1 :style="{ fontWeight: 'bolder', color: themeVars.primaryColor }">GallopIn’sider</n-h1>
            <n-text style="opacity: 0.8; font-size: medium;">Welcome to the GallopIn’sider
                Hippodrome!</n-text>
        </div>
        <div class="title-action-buttons fixed-buttons-container">
            <n-button data-test="generate-program-button" @click="generateProgram"
                :type="isGenerated ? 'tertiary' : 'primary'" size="large" style="margin-right: 10px; ">
                <template #icon>
                    <n-icon>
                        <n-icon :size="18" :component="TextBulletListAdd20Filled" />
                    </n-icon>
                </template>

                Generate Program
            </n-button>
            <!-- Pause/Resume button -->


            <!-- Start race button -->
            <n-button data-test="play-toggle-button" style="min-width: 120px;" @click="startRace"
                :type="!isGenerated ? 'tertiary' : 'primary'" :disabled="!isGenerated || allLapsFinished" size="large">
                <template #icon>
                    <n-icon>
                        <n-icon :size="18" :component="isPaused ? Play16Filled : Pause16Filled" />
                    </n-icon>
                </template>
                {{ isPaused ? 'Start' : 'Pause' }}
            </n-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { store } from "@/store/store";
import { Play16Filled, TextBulletListAdd20Filled, Pause16Filled } from "@vicons/fluent";
import { NButton, NH1, NText, NIcon, useThemeVars } from "naive-ui";
import { computed } from "vue";

const themeVars = useThemeVars();

// Call mutation
const generateProgram = () => {
    store.commit('generateRaceProgram')
}


const isGenerated = computed(() => !!store.state.program?.rounds.length);
const isPaused = computed(() => store.state.isPaused);
const program = computed(() => store.state.program);

// Check if all laps are finished (no scheduled or ongoing status)
const allLapsFinished = computed(() => {
    const p = program.value
    if (!p?.rounds?.length) return false

    // If any round is scheduled or ongoing, not all laps are finished
    return !p.rounds.some(round =>
        round.status === 'scheduled' || round.status === 'ongoing'
    )
})

const startRace = () => {
    if (isPaused.value)
        store.dispatch('startRace');
    else {
        store.dispatch('togglePause');
    }
};

</script>

<style scoped>
.title-wrapper {
    padding: 4px;
    height: 75px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    width: 100%;
}

.title-desc-wrapper {
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: start;
}

.title-action-buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
}

@media (max-width: 1199px) {
    .fixed-buttons-container {
        /* Make the container fixed on the screen */
        position: fixed;

        /* Position it (e.g., top-right of the screen) */
        bottom: 10px;
        right: 10px;

        /* Ensure it's above other content (critical for fixed elements) */
        z-index: 1000;

        /* Use Naive UI's card background CSS variable for theme consistency */

        /* Optional padding/styling for better appearance */
        padding: 8px 12px;
        border-radius: 6px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

        /* Ensure it's displayed if you hid it by default */
        display: block;
    }
}
</style>