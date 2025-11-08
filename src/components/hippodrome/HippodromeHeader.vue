<template>
    <div class="title-wrapper">
        <div class="title-desc-wrapper">
            <NH1 :style="{ fontWeight: 'bolder', color: themeVars.primaryColor }">GallopIn’sider</NH1>
            <NText style="opacity: 0.8; font-size: medium;">Welcome to the GallopIn’sider
                Hippodrome!</NText>
        </div>
        <div class="title-actioNButtons fixed-buttons-container">
            <NButton data-test="generate-program-button" @click="generateProgram"
                :type="isGenerated ? 'tertiary' : 'primary'" size="large" style="margin-right: 10px; ">
                <template #icon>
                    <NIcon :size="18" :component="TextBulletListAdd20Filled" />
                </template>

                Generate Program
            </NButton>
            <!-- Pause/Resume button -->


            <!-- Start race button -->
            <NButton data-test="play-toggle-button" style="min-width: 120px;" @click="startRace"
                :type="!isGenerated ? 'tertiary' : 'primary'" :disabled="!isGenerated || allLapsFinished" size="large">
                <template #icon>
                    <NIcon :size="18" :component="isPaused ? Play16Filled : Pause16Filled" />
                </template>
                {{ isPaused ? 'Start' : 'Pause' }}
            </NButton>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { store } from "@/store/store";
import { Play16Filled, TextBulletListAdd20Filled, Pause16Filled } from "@vicons/fluent";
import { NButton, NH1, NText, NIcon, useThemeVars } from "naive-ui";
import { computed } from "vue";

const themeVars = useThemeVars();


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


// Call mutation
const generateProgram = () => {
    if (!isPaused.value) {
        store.dispatch('togglePause').then(() => {
            store.commit('generateRaceProgram');
        });
    } else {
        store.commit('generateRaceProgram');
    }
}

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

.title-actioNButtons {
    display: flex;
    flex-direction: row;
    align-items: center;
}

@media (max-width: 1199px) {
    .fixed-buttons-container {
        position: fixed;
        bottom: 10px;
        right: 10px;
        z-index: 1000;
        padding: 8px 12px;
        border-radius: 6px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        background-color: white;
        display: block;
    }
}
</style>