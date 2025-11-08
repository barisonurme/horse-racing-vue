<template>
  <section class="welcome-section">
    <NCard class="welcome-card" hoverable>
      <NH1 class="title">Welcome to the GallopIn’sider!</NH1>
      <NH3 depth="2">Are you ready to join the excitement?</NH3>


      <NText depth="3" class="description">
        Get ready to experience the thrill of the Horse Racing Game where each race
        unfolds live, with animated horses competing round by round.
        You can generate your horses, view the schedule, and start the race when ready.
      </NText>

      <NFlex vertical gap="16" justify="center">
        <!-- Navigate to Hippodrome -->
        <NButton type="primary" size="large" class="start-btn" @click="router.push('/hippodrome')">
          Go to Hippodrome
        </NButton>

        <!-- Navigate to Hippodrome -->
        <NButton type="tertiary" size="large" class="start-btn" @click="router.push('/about')">
          Learn More
        </NButton>
      </NFlex>
    </NCard>
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
