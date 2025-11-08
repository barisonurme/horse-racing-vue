<template>
    <n-card style="overflow-y: auto;">
        <div v-for="(round, index) in store.state.program?.rounds ?? []" :key="round.id" class="mb-4">
            <n-card size="small">
                <n-text strong>{{ index + 1 }}. Lap | {{ reactiveProgram?.rounds[index]?.distance }}m</n-text>
                <n-data-table :columns="columns" :data="getRoundData(round.results ?? [])" :bordered="true"
                    size="small" />

            </n-card>
        </div>
    </n-card>
</template>

<script lang="ts" setup>
import { NCard, NDataTable, NText } from "naive-ui";
import type { DataTableColumns } from "naive-ui";
import { useStore } from "vuex";
import { key } from "@/store/store";
import { computed, watch } from "vue";

const store = useStore(key);

const { horses } = store.state;

const reactiveProgram = computed(() => store.state.program);

const getRoundData = (result: string[]) =>
    result.map((horseId, index) => ({
        position: index + 1,
        horseId,
    }));

watch(
    () => store.state.program,
    (newProgram) => {
        console.log("Program updated:", newProgram);
    },
    { immediate: true, deep: true }
);
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
        render: (row) => (horses.find(h => h.id === row.horseId)?.name || 'Unknown') + (horses.find(h => h.id === row.horseId)?.condition || ' (Unknown Condition)'),

    },
];

</script>
