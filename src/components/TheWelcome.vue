<template>
  <section class="welcome-section">
    <n-card class="welcome-card" hoverable>
      <n-h1 class="title">Welcome to the Race!</n-h1>
      <n-h3 depth="2">Are you ready to join the excitement?</n-h3>


      <n-text depth="3" class="description">
        Get ready to experience the thrill of the Horse Racing Game where each race
        unfolds live, with animated horses competing round by round.
        You can generate your horses, view the schedule, and start the race when ready.
      </n-text>

      <n-flex vertical gap="16" justify="center">
        <!-- Navigate to Hippodrome -->
        <n-button type="primary" size="large" class="start-btn" @click="router.push('/hippodrome')">
          Go to Hippodrome
        </n-button>

        <!-- Navigate to Hippodrome -->
        <n-button type="tertiary" size="large" class="start-btn" @click="router.push('/about')">
          Learn More
        </n-button>
      </n-flex>
    </n-card>
  </section>
</template>

<script setup lang="ts">
import router from "@/router";
import { NCard, NButton, NText, NH1, NH3, NFlex } from "naive-ui";

</script>

<style scoped>
.welcome-section {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
  background-color: var(--n-color);
  padding: 2rem;
}

.welcome-card {
  text-align: center;
  padding: 2rem;
  max-width: 700px;
  background-color: var(--n-color-overlay);
}

.title {
  margin-bottom: 1rem;
}

.description {
  display: block;
  margin-bottom: 2rem;
  line-height: 1.6;
  font-size: 1.05rem;
}

.start-btn {
  font-weight: 600;
  letter-spacing: 0.5px;
}

h1 {
  font-weight: bold;
}
</style>
