<template>
    <n-card title="Horse List" style="overflow-y: auto;">
        <n-data-table :columns="columns" :data="horses" :bordered="true" :size="'small'" />
    </n-card>
</template>

<script lang="ts" setup>
import type { THorse } from "@/views/HippodromeView.vue";
import { NCard, NDataTable } from "naive-ui";

defineProps<{
    horses: THorse[];
}>();

const columns = [
    {
        title: 'Name',
        key: 'name'
    },
    {
        title: 'Condition',
        key: 'condition',
        render: () => Math.floor(Math.random() * 100) + 1 // 1-100
    },
    {
        title: 'Color',
        key: 'color'
    }
];
</script>
