<template>
    <NCard data-test="hippodrome-program" size="huge" class="program-main-wrapper" style="overflow-y: auto;">
        <NDivider style="margin-top: 0px; margin-bottom: 12px;" horizontal />

        <div v-for="(round, index) in store.state.program?.rounds ?? []" :key="round.id" class="mb-4">
            <NCard :bordered="false" style="min-height: 500px;" size="small">
                <NFlex style="padding: 5px;" justify="space-between" class="mb-4">
                    <NText style="font-weight: 700">{{ index + 1 }}. Lap</NText>
                    <NText style="font-weight: 700">{{ reactiveProgram?.rounds[index]?.distance }}m</NText>
                </NFlex>
                <NDataTable :columns="columns" :data="getRoundData(round.positions)" :bordered="true" size="small" />

            </NCard>
        </div>
    </NCard>
</template>

<script lang="ts" setup>
import { NCard, NDataTable, NText, NFlex, NDivider } from "naive-ui";
import type { DataTableColumns } from "naive-ui";
import { useStore } from "vuex";
import { key } from "@/store/store";
import { computed } from "vue";

const store = useStore(key);

const { horses } = store.state;

const reactiveProgram = computed(() => store.state.program);

const getRoundData = (positions: string[]) =>
    positions.map((horseId, index) => ({
        position: index + 1,
        horseId,
    }));

const columns: DataTableColumns<{ position: number; horseId: string }> = [
    {
        title: "Position",
        key: "position",
        align: "left",
    },
    {
        title: "Name",
        key: "horseId",
        align: "left",
        render: (row) => (horses.find(h => h.id === row.horseId)?.name || 'Unknown'),
    },
];

</script>

<style scoped>
.program-main-wrapper {
    height: calc(100dvh - 185px);
    max-height: calc(100dvh - 185px);
}

@media (max-width: 1280px) {
    .program-main-wrapper {
        height: 100%;
        max-height: 100%;
        overflow-y: auto;
    }
}
</style>