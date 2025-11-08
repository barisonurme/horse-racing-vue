<script setup lang="ts">
import { RouterLink } from "vue-router";
import { NLayoutHeader, NFlex, NButton } from "naive-ui";
</script>

<template>
    <n-layout-header bordered class="header">
        <n-flex justify="space-between" align-items="center" class="navigation-wrapper">
            <n-flex class="logo">
                <img src="@/assets/logo.svg" alt="Vue logo" width="28" height="28" preview-disabled />
                <span class="logo-text">Horse Racing Game</span>
            </n-flex>

            <n-flex gap="12">
                <RouterLink to="/">
                    <n-button quaternary type="primary">Home</n-button>
                </RouterLink>
                <RouterLink to="/about">
                    <n-button quaternary type="primary">About</n-button>
                </RouterLink>
            </n-flex>
        </n-flex>

    </n-layout-header>
</template>

<style scoped>
.header {
    display: flex;
    align-items: center;
    height: 60px;
    padding: 0.5rem 1rem;
    background-color: var(--n-color-overlay);
    color: var(--n-text-color);
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
