<template>
    <div class="main-wrapper">
        <HippodromeHeader />
        <NDivider style="margin-top: 8px; margin-bottom: 8px;" horizontal />

        <NGrid cols="1 s:2 m:2 l:12" responsive="screen" style="gap: 8px">
            <NGrid-item :span="3" :s-span="1" :m-span="1" :l-span="1">
                <HippodromeHorseList :horses="horses" />
            </NGrid-item>
            <NGrid-item :span="5" :s-span="1" :m-span="1" :l-span="1">
                <HippodromeRacingTrack :trackPerRace="HIPPODROME_HORSE_PER_RACE" />
            </NGrid-item>
            <NGrid-item :span="2" :s-span="1" :m-span="1" :l-span="1">
                <HippodromeProgram title="Program" />
            </NGrid-item>
            <NGrid-item :span="2" :s-span="1" :m-span="1" :l-span="1">
                <HippodromeResults title="Results" />
            </NGrid-item>
        </NGrid>
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
import { onUnmounted } from "vue";


const store = useStore(key)
const { horses } = store.state;

// Cleanup intervals when component unmounts
onUnmounted(() => {
    if (store.state.raceInterval) {
        store.commit('clearRaceInterval');
        store.commit('setPaused', true);
    }
});

</script>


<style scoped>
.main-wrapper {
    padding: 10px;
    width: 100%;
    max-height: calc(100dvh - 80px);
}


@media (max-width: 1280px) {
    .main-wrapper {
        /* Remove max-height on large screens */
        max-height: none;
    }
}

.maiNCard {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
}
</style>