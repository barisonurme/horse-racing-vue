<template>
    <n-card title="Race Tracks">
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

import { NCard, NFlex } from 'naive-ui'

defineProps<{ trackPerRace: number }>()
</script>

<style scoped>
.track-wrapper {
    display: flex;
    justify-content: center;
    align-items: start;
    width: 100% !important;
    height: 100%;
}
</style>
