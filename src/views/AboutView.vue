<template>
  <div class="about-page">
    <NCard class="card" size="large" :style="{ padding: '32px !important', }">
      <template #header>
        <NH1 class="card-title">About the {{ packageInfo.name }} {{ packageInfo.version }}</NH1>
      </template>

      <NH2 strong>Game Overview</NH2>
      <NList bordered>
        <NListItem>
          Up to <strong>20 horses</strong> with unique colors and condition scores.
        </NListItem>
        <NListItem>
          <strong>6 rounds</strong> per race from <strong>1200m</strong> to <strong>2200m</strong>.
        </NListItem>
        <NListItem>
          <strong>Animated horse movement</strong> and live results per round.
        </NListItem>
      </NList>

      <NH2>Technologies Used</NH2>
      <NSpace horizontal size="small">
        <NTag type="primary" size="large">Vue 3 Composition API</NTag>
        <NTag type="primary" size="large">Vuex</NTag>
        <NTag type="primary" size="large">Vite</NTag>
        <NTag type="primary" size="large">Naive UI</NTag>
      </NSpace>

      <NH2>How It Works</NH2>
      <NList>
        <NListItem>
          Click <NTag type="default" size="small">Generate Program</NTag> to create horses & race schedule.
        </NListItem>
        <NListItem>
          Click <NTag type="success" size="small">Start</NTag> to begin laps.
        </NListItem>
        <NListItem>
          Watch the live animations and see results update in real time.
        </NListItem>
      </NList>

      <NCard size="small" class="notes-card">
        <NH2>Notes</NH2>
        <NText depth="3">
          The project is structured for scalability. Game logic lives in the Vuex store,
          while each component focuses on UI and interactivity.
        </NText>
      </NCard>


      <NFlex vertical style="margin-top: 8px;" gap="16" justify="center">

        <!-- Navigate to Home -->
        <NButton type="primary" size="large" class="start-btn" @click="router.push('/')">
          Home Page
        </NButton>
      </NFlex>
    </NCard>
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
