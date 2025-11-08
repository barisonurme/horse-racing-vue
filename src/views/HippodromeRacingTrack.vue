<template>
    <n-card size="huge" class="track-main-wrapper" title="Race Tracks">
        <n-divider style="margin-top: 0px; margin-bottom: 12px;" horizontal />
        <n-flex v-for="trackIndex in trackPerRace" :key="trackIndex">
            <n-card class="track-wrapper" :content-style="{ padding: '0', width: '100%' }">
                <n-flex vertical style="display: flex; flex-direction: row;">
                    <HippodromeHorseSlider :trackIndex="trackIndex" />
                </n-flex>
            </n-card>
        </n-flex>
    </n-card>
</template>

<script setup lang="ts">
import HippodromeHorseSlider from '@/components/hippodrome/HippodromeHorseSlider.vue';

import { NCard, NFlex, NDivider } from 'naive-ui'

defineProps<{ trackPerRace: number }>()
</script>

<style scoped>
.track-main-wrapper {
    height: calc(100dvh - 185px);
    max-height: calc(100dvh - 185px);
    overflow-y: auto;
}

.track-wrapper {
    display: flex;
    justify-content: center;
    align-items: start;
    width: 100% !important;
    height: 100%;
}
</style>
