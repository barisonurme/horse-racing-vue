<template>
    <div class="title-wrapper">
        <div class="title-desc-wrapper">
            <n-h2>Welcome to the Hippodrome!</n-h2>
        </div>
        <div class="title-action-buttons">
            <n-button type="tertiary" size="large" style="margin-right: 10px; ">
                Generate Program
            </n-button>
            <n-button type="primary" size="large" style="margin-right: 10px; ">
                Start
            </n-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { NButton, NH2 } from "naive-ui";
</script>

<style scoped>
.title-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    width: 100%;
}

.title-desc-wrapper {
    display: flex;
    flex-direction: column;
    align-items: start;
}

.title-action-buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
}
</style>