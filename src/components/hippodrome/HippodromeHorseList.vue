<template>
    <n-card size="huge" class="horse-list-wrapper" title="Horse List" style="overflow-y: auto;">
        <n-divider style=" margin-top: 0px; margin-bottom: 12px;" horizontal />
        <n-data-table data-test="horse-list" :columns="columns" :data="horses" :bordered="true" :size="'small'" />
    </n-card>
</template>

<script lang="ts" setup>
import { HIPPODROME_CONDITION_DEBUFF_MULTIPLYER } from "@/store/store";
import type { THorse } from "@/store/types/store-types";
import { NCard, NDataTable, NDivider } from "naive-ui";
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
        render: (row) => `${row.condition ? row.condition - HIPPODROME_CONDITION_DEBUFF_MULTIPLYER : ''}%`,
    },
]
</script>

<style scoped>
.horse-list-wrapper {
    height: calc(100dvh - 185px);
    max-height: calc(100dvh - 185px);
}

@media (max-width: 1200px) {
    .horse-list-wrapper {
        height: 100%;
        max-height: 100%;
        overflow-y: auto;
    }
}

.primary-title :deep(.n-card-header__main) {
    color: var(--n-color-primary);
}
</style>
