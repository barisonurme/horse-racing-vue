<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from './layout/HeaderComponent.vue';
</script>

<template>
  <section class="app">
    <HeaderComponent />

    <section class="main-content">
      <RouterView />
    </section>
  </section>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}

.main-content {
  flex: 1;
  overflow-y: auto;
}
</style>
