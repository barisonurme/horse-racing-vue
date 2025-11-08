<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from './layout/HeaderComponent.vue'
import { NConfigProvider, NGlobalStyle, type GlobalThemeOverrides, useThemeVars } from 'naive-ui'

const themeVars = useThemeVars()

const themeOverrides: GlobalThemeOverrides = {
  Card: {
    paddingMedium: '8px',
    paddingSmall: '8px',
    paddingLarge: '8px',
    paddingHuge: '12px',
    titleFontSizeMedium: '18px',
    titleFontSizeSmall: '16px',
    titleFontSizeLarge: '20px',
    titleFontSizeHuge: '24px',
    titleFontWeight: 700,
    titleTextColor: themeVars.value.primaryColor
  },
  Divider: {
    marginVerticalMedium: '0 16px',
    marginVerticalSmall: '0 12px'
  },

}
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
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
  height: 100dvh;
}

.main-content {
  max-height: calc(100dvh - 20px);
  overflow-y: hidden;
}


@media (max-width: 1200px) {
  .main-content {
    max-height: none;
    overflow-y: auto;
  }
}
</style>
