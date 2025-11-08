<template>
    <n-card class="horse-list-wrapper" title="Horse List" style="overflow-y: auto;">
        <n-data-table :columns="columns" :data="horses" :bordered="true" :size="'small'" />
    </n-card>
</template>

<script lang="ts" setup>
import type { THorse } from "@/store/types/store-types";
import { NCard, NDataTable } from "naive-ui";
import type { TableColumns } from "naive-ui/es/data-table/src/interface";
import { h } from "vue";

defineProps<{
    horses: THorse[];
}>();


const columns: TableColumns<THorse> = [
    {
        align: 'left',
        title: 'Name',
        key: 'name',
        render: (row) => h('div', {
            style: {
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
            }
        }, [
            h('div', {
                style: {
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    backgroundColor: row.color,
                    border: '1px solid #ddd'
                }
            }),
            row.name // Optional: you can remove this if you only want the circle
        ])
    },
    {
        align: 'right',
        title: "Condition",
        key: "condition",
        render: (row) => `${row.condition ?? Math.floor(Math.random() * 100) + 1}%`,
    },
]
</script>

<style scoped>
.horse-list-wrapper {
    overflow-y: auto;
}
</style>
