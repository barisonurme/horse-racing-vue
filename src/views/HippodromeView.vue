<template>
    <div class="main-wrapper">
        <n-card class="main-card">
            <HippodromeHeader />
            <n-divider horizontal />

            <n-grid :cols="12" :gap="16">
                <n-grid-item class="horse-list-wrapper" :span="3" style="overflow-y: auto;">
                    <HippodromeHorseList :horses="horses" />
                </n-grid-item>
                <n-grid-item class="horse-list-wrapper" :span="5">
                    <HippodromeRacingTrack :trackPerRace="HIPPODROME_TRACK_PER_RACE" />
                </n-grid-item>
                <n-grid-item class="horse-list-wrapper" :span="2" style="overflow-y: auto;">
                    <HippodromeProgram title="Program" />
                </n-grid-item>
                <n-grid-item class="horse-list-wrapper" :span="2" style="overflow-y: auto;">
                    <HippodromeResults title="Results" />
                </n-grid-item>
            </n-grid>
        </n-card>
    </div>
</template>

<script setup lang="ts">
import HippodromeHorseList from "@/components/hippodrome/HippodromeHorseList.vue";
import HippodromeHeader from "@/components/hippodrome/HippodromeHeader.vue";
import { NCard, NDivider, NGrid, NGridItem } from "naive-ui";
import HippodromeRacingTrack from "./HippodromeRacingTrack.vue";
import HippodromeProgram from "@/components/hippodrome/HippodromeProgram.vue";
import { useStore } from "vuex";
import { HIPPODROME_TRACK_PER_RACE, key } from "@/store/store";
import HippodromeResults from "@/components/hippodrome/HippodromeResults.vue";


const store = useStore(key)
const { horses } = store.state;


</script>

<style>
.main-wrapper {
    padding: 20px;
    width: 100%;
    max-height: calc(100dvh - 60px);
    overflow-y: auto;
}

.main-card {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
}

.horse-list-wrapper {
    max-height: calc(100dvh - 240px);
    overflow-y: auto;
}
</style>