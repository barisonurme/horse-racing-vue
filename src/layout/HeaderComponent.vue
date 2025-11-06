<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>



<template>
    <header>

        <section class="navigation-wrapper">
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="25" height="25" />

            <nav class="navigation">
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </nav>
        </section>
    </header>
</template>

<style scoped>
.navigation {
    padding: 0.5rem 1rem;
    width: 100%;
    flex: 1;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: flex-end;
}

.navigation-wrapper {
    display: flex;
    padding: 0.5rem 1rem;
    justify-content: space-between;
    align-items: center;
    background-color: var(--vt-c-indigo);
    width: 100%;
}

header {
    display: flex;
    width: 100%;
    line-height: 1.5;
    max-height: 100vh;
}
</style>