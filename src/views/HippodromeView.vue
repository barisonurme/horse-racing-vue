<template>
    <div class="main-wrapper">
        <HippodromeHeader />
        <n-divider style="margin-top: 8px; margin-bottom: 8px;" horizontal />

        <n-grid cols="1 s:2 m:4 l:12" responsive="screen" style="gap: 8px">
            <n-grid-item :span="3" :s-span="1" :m-span="1" :l-span="1">
                <HippodromeHorseList :horses="horses" />
            </n-grid-item>
            <n-grid-item :span="5" :s-span="1" :m-span="1" :l-span="1">
                <HippodromeRacingTrack :trackPerRace="HIPPODROME_HORSE_PER_RACE" />
            </n-grid-item>
            <n-grid-item :span="2" :s-span="1" :m-span="1" :l-span="1">
                <HippodromeProgram title="Program" />
            </n-grid-item>
            <n-grid-item :span="2" :s-span="1" :m-span="1" :l-span="1">
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
import { HIPPODROME_HORSE_PER_RACE, key } from "@/store/store";
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


@media (max-width: 1200px) {
    .main-wrapper {
        /* Remove max-height on large screens */
        max-height: none;
    }
}

.main-card {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
}
</style>