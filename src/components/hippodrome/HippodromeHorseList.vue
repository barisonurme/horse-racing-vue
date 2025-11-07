<template>
    <n-card title="Horse List" style="overflow-y: auto;">
        <n-data-table :columns="columns" :data="horses" :bordered="true" :size="'small'" />
    </n-card>
</template>

<script lang="ts" setup>
import type { THorse } from "@/views/HippodromeView.vue";
import { NCard, NDataTable } from "naive-ui";
import type { TableColumns } from "naive-ui/es/data-table/src/interface";

defineProps<{
    horses: THorse[];
}>();


const columns: TableColumns<THorse> = [
    {
        title: 'Name',
        key: 'name'
    },
    {
        align: 'left',
        title: 'Color',
        key: 'color',
    },
    {
        align: 'right',
        title: "Condition",
        key: "condition",
        render: (row) => `${row.condition ?? Math.floor(Math.random() * 100) + 1}%`,
    },
]
</script>
