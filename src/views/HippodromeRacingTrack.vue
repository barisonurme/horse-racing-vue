<template>
    <NCard size="huge" class="track-main-wrapper" :title="dynamicTitle">
        <NDivider style="margin-top: 0px; margin-bottom: 12px;" horizontal />
        <NFlex v-for="trackIndex in trackPerRace" :key="trackIndex">
            <NCard class="track-wrapper" :content-style="{ padding: '0', width: '100%' }">
                <NFlex vertical style="display: flex; flex-direction: row;">
                    <HippodromeHorseSlider :trackIndex="trackIndex" />
                </NFlex>
            </NCard>
        </NFlex>
        <div class="finish-container">
            <NH3 class="finish-text" type="warning">Finish</NH3>
        </div>
    </NCard>
</template>

<script setup lang="ts">
import HippodromeHorseSlider from '@/components/hippodrome/HippodromeHorseSlider.vue';
import { key } from '@/store/store';

import { NCard, NFlex, NDivider, NH3 } from 'naive-ui'
import { computed, toRef } from 'vue';
import { useStore } from 'vuex';

defineProps<{ trackPerRace: number }>()

const store = useStore(key)
const program = toRef(store.state, 'program')
const isPaused = toRef(store.state, 'isPaused')
const isGenerated = computed(() => !!store.state.program?.rounds.length);


// Check if all laps are finished (no scheduled or ongoing status)
const allLapsFinished = computed(() => {
    const p = program.value
    if (!p?.rounds?.length) return false

    // If any round is scheduled or ongoing, not all laps are finished
    return !p.rounds.some(round =>
        round.status === 'scheduled' || round.status === 'ongoing'
    )
})

const dynamicTitle = computed(() => {
    if (allLapsFinished.value) {
        return 'Click Generate'
    } else if (isGenerated.value && isPaused.value) {
        return 'Click Start'
    } else if (isPaused.value) {
        return 'Click Generate'
    } else {
        return 'Race In Progress'
    }
})
</script>

<style scoped>
.track-main-wrapper {
    height: calc(100dvh - 185px);
    max-height: calc(100dvh - 185px);
    overflow-y: auto;
    display: flex;
    flex-direction: column;
}

@media (max-width: 1200px) {
    .track-main-wrapper {
        height: 100%;
        max-height: 100%;
        overflow-y: auto;
    }
}

.track-wrapper {
    display: flex;
    justify-content: center;
    align-items: start;
    width: 100% !important;
    height: 100%;
}

.finish-container {
    display: flex;
    justify-content: flex-end;
    margin-top: auto;
    padding-top: 16px;
}

.finish-text {
    margin: 0;
    font-weight: 600;
}
</style>