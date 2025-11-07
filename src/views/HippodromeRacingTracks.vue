<template>
    <n-card title="Race Tracks">
        <n-grid :cols="12" :gap="12">
            <n-grid-item :span="12" v-for="trackIndex in trackPerRace" :key="trackIndex">
                <n-card class="track-wrapper" size="small" :content-style="{ padding: '0' }">
                    <p class="track-index" :style="{
                        backgroundColor: themeVars.primaryColor,
                        color: themeVars.cardColor
                    }">
                        {{ trackIndex }}
                    </p>
                </n-card>
            </n-grid-item>
        </n-grid>
    </n-card>
</template>

<script setup lang="ts">
import { useThemeVars } from 'naive-ui'
import { NCard, NGrid, NGridItem } from 'naive-ui'
const themeVars = useThemeVars()

defineProps<{ trackPerRace: number }>()
</script>

<style scoped>
.track-wrapper {
    display: flex;
    justify-content: center;
    align-items: start;
    height: 60px;
    width: 100%;
}

.track-index {
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    margin: 0;
    width: 40px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
