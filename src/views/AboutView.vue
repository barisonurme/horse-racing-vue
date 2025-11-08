<template>
  <div class="about-page">
    <n-card class="card" size="large" :style="{ padding: '32px !important', }">
      <template #header>
        <n-h1 class="card-title">About the {{ packageInfo.name }} {{ packageInfo.version }}</n-h1>
      </template>

      <n-h2 strong>Game Overview</n-h2>
      <n-list bordered>
        <n-list-item>
          Up to <strong>20 horses</strong> with unique colors and condition scores.
        </n-list-item>
        <n-list-item>
          <strong>6 rounds</strong> per race from <strong>1200m</strong> to <strong>2200m</strong>.
        </n-list-item>
        <n-list-item>
          <strong>Animated horse movement</strong> and live results per round.
        </n-list-item>
      </n-list>

      <n-h2>Technologies Used</n-h2>
      <n-space horizontal size="small">
        <n-tag type="primary" size="large">Vue 3 Composition API</n-tag>
        <n-tag type="primary" size="large">Vuex</n-tag>
        <n-tag type="primary" size="large">Vite</n-tag>
        <n-tag type="primary" size="large">Naive UI</n-tag>
      </n-space>

      <n-h2>How It Works</n-h2>
      <n-list>
        <n-list-item>
          Click <n-tag type="default" size="small">Generate Program</n-tag> to create horses & race schedule.
        </n-list-item>
        <n-list-item>
          Click <n-tag type="success" size="small">Start</n-tag> to begin laps.
        </n-list-item>
        <n-list-item>
          Watch the live animations and see results update in real time.
        </n-list-item>
      </n-list>

      <n-card size="small" class="notes-card">
        <n-h2>Notes</n-h2>
        <n-text depth="3">
          The project is structured for scalability. Game logic lives in the Vuex store,
          while each component focuses on UI and interactivity.
        </n-text>
      </n-card>


      <n-flex vertical style="margin-top: 8px;" gap="16" justify="center">

        <!-- Navigate to Home -->
        <n-button type="primary" size="large" class="start-btn" @click="router.push('/')">
          Home Page
        </n-button>
      </n-flex>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { NCard, NH1, NH2, NList, NListItem, NTag, NSpace, NText, NFlex, NButton } from "naive-ui";
import packageInfo from "../../package.json";
import router from "@/router";
</script>

<style scoped>
.about-page {
  display: flex;
  justify-content: center;
  padding: 24px;
  min-height: 100%;
}

.intro {
  margin-bottom: 16px;
  font-size: 0.85rem;
  line-height: 1.6;
}

.notes {
  font-size: 0.95rem;
  line-height: 1.6;
}

.footer {
  text-align: center;
  margin-top: 24px;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 800px;
}

h2 {
  margin-top: 24px !important;
  margin-bottom: 12px !important;
}

.notes-card {
  padding-bottom: 24px;
}
</style>
