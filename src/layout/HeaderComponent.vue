<script setup lang="ts">
import { RouterLink } from "vue-router";
import { NLayoutHeader, NFlex, NButton, useThemeVars } from "naive-ui";

const themeVars = useThemeVars();
</script>

<template>
    <NLayoutHeader :style="{ backgroundColor: themeVars.primaryColor }" bordered class="header">
        <NFlex justify="space-between" align-items="center" class="navigation-wrapper">
            <NFlex class="logo">
                <img src="@/assets/logo.svg" alt="Vue logo" width="28" height="28" preview-disabled />
                <span :style="{ color: themeVars.cardColor }" class="logo-text">Horse Racing Game</span>
            </NFlex>

            <NFlex gap="12">
                <RouterLink to="/">
                    <NButton :bordered='false' :text-color="themeVars.cardColor">Home</NButton>
                </RouterLink>
                <RouterLink to="/about">
                    <NButton :bordered='false' :text-color="themeVars.cardColor">About</NButton>
                </RouterLink>
            </NFlex>
        </NFlex>

    </NLayoutHeader>
</template>

<style scoped>
.header {
    display: flex;
    align-items: center;
    height: 60px;
    padding: 0.5rem 1rem;
    background-color: var(--n-color-overlay);
    color: var(--NText-color);
}

.navigation-wrapper {
    width: 100%;
}

.logo {
    display: flex;
    align-items: center;
}

.logo-text {
    font-weight: 600;
    font-size: 1.1rem;
}
</style>
