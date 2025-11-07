<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from './layout/HeaderComponent.vue'
import { NConfigProvider, NGlobalStyle } from 'naive-ui'
</script>

<template>
  <n-config-provider>
    <n-global-style />
    <section class="app">
      <HeaderComponent />

      <section class="main-content">
        <RouterView />
      </section>
    </section>
  </n-config-provider>
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
