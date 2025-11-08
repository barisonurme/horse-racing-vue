<template>
    <div class="main-wrapper">
        <HippodromeHeader />
        <n-divider style="margin-top: 8px; margin-bottom: 8px;" horizontal />

        <n-grid :cols="12" style="gap: 8px" responsive="screen">
            <n-grid-item :span="3">
                <HippodromeHorseList :horses="horses" />
            </n-grid-item>
            <n-grid-item :span="5">
                <HippodromeRacingTrack :trackPerRace="HIPPODROME_TRACK_PER_RACE" />
            </n-grid-item>
            <n-grid-item :span="2">
                <HippodromeProgram title="Program" />
            </n-grid-item>
            <n-grid-item :span="2">
                <HippodromeResults title="Results" />
            </n-grid-item>
        </n-grid>
    </div>
</template>

<script setup lang="ts">
import HippodromeHorseList from "@/components/hippodrome/HippodromeHorseList.vue";
import HippodromeHeader from "@/components/hippodrome/HippodromeHeader.vue";
import { NDivider, NGrid, NGridItem } from "naive-ui";
import HippodromeRacingTrack from "./HippodromeRacingTrack.vue";
import HippodromeProgram from "@/components/hippodrome/HippodromeProgram.vue";
import { useStore } from "vuex";
import { HIPPODROME_TRACK_PER_RACE, key } from "@/store/store";
import HippodromeResults from "@/components/hippodrome/HippodromeResults.vue";


const store = useStore(key)
const { horses } = store.state;


</script>

<style scoped>
.main-wrapper {
    padding: 10px;
    width: 100%;
    max-height: calc(100dvh - 80px);
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