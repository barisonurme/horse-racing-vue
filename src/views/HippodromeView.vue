<template>
    <div class="main-wrapper">
        <n-card class="main-card">
            <HippodromeTitle />
            <n-divider horizontal />

            <n-grid :cols="12" :gap="16">
                <n-grid-item :span="3" style="overflow-y: auto;">
                    <HippodromeHorseList :horses="horses" />
                </n-grid-item>
                <n-grid-item :span="5">
                    <HippodromeRacingTracks :trackPerRace="HIPPODROME_TRACK_PER_RACE" />
                </n-grid-item>
                <n-grid-item :span="2" style="overflow-y: auto;">
                    <HippodromeBoard :title="'Program'" :data="horses" />
                </n-grid-item>
                <n-grid-item :span="2" style="overflow-y: auto;">
                    <HippodromeBoard :title="'Results'" :data="horses" />
                </n-grid-item>
            </n-grid>
        </n-card>
    </div>
</template>

<script setup lang="ts">
import HippodromeHorseList from "@/components/hippodrome/HippodromeHorseList.vue";
import HippodromeTitle from "@/components/hippodrome/HippodromeTitle.vue";
import { generateHorseName, generateUniqueColors } from "@/utils/random-generator";
import { NCard, NDivider, NGrid, NGridItem } from "naive-ui";
import HippodromeRacingTracks from "./HippodromeRacingTracks.vue";
import HippodromeBoard from "@/components/hippodrome/HippodromeBoard.vue";

const HIPPODROME_HORSE_COUNT = 20;
// const HIPPODROME_HORSE_PER_RACE = Math.min(6, HIPPODROME_HORSE_COUNT); // We added HIPPODROME_HORSE_COUNT to easily change horse count in future
const HIPPODROME_TRACK_PER_RACE = 10;
// const HIPPODROME_LAPS_COUNT = 4;
// const HIPPODROME_RACE_INTERVAL_SECONDS = 30;
// const HIPPODROME_LAPS_LENGTH = [1200, 1600, 2000, 2400];

export type THorse = {
    id: string;
    name: string;
    color: string;
    condition: number
}

const usedColors = new Set<string>();

const horses: THorse[] = Array.from({ length: HIPPODROME_HORSE_COUNT }, () => ({
    id: crypto.randomUUID(),
    name: generateHorseName(),
    color: generateUniqueColors({ usedColors }),
    condition: Math.floor(Math.random() * 100) + 1
}));
</script>

<style>
.main-wrapper {
    padding: 20px;
    height: 100%;
    width: 100%;
}

.main-card {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
}
</style>