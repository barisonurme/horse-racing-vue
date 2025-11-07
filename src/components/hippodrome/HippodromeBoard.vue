<template>
    <n-card :title="title" style="overflow-y: auto;">
        <n-data-table :columns="columns" :data="data" :bordered="true" size="small" />
    </n-card>
</template>

<script lang="ts" setup>
import { NCard, NDataTable } from "naive-ui";
import type { DataTableColumns } from "naive-ui";
import type { THorse } from "@/views/HippodromeView.vue";

defineProps<{
    data: THorse[];
    title: string;
}>();

const columns: DataTableColumns<THorse> = [
    {
        align: "center",
        title: "Position",
        key: "id",
        render: (_, index) => index + 1,
    },
    {
        align: "right",
        title: "Name",
        key: "name",
    },
];
</script>
