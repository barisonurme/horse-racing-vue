<script setup lang="ts">
import packagejson from '../../package.json';
</script>

<template>
  <div class="about-page">
    <div class="container">
      <h1 class="title">Horse Racing {{ packagejson.version }}</h1>
      <p class="intro">
        This project is an interactive horse racing simulation built with <strong>Vue 3</strong> and
        <strong>Vuex</strong>.
        It’s designed to demonstrate clean component architecture, scalable state management, and simple animation
        handling.
      </p>

      <section class="section">
        <h2>Game Overview</h2>
        <ul>
          <li>Up to <strong>20 horses</strong> with unique colors and condition scores.</li>
          <li><strong>6 rounds</strong> of racing, each with different track lengths (1200 m – 2200 m).</li>
          <li><strong>Animated horse movement</strong> and live race results after each round.</li>
        </ul>
      </section>

      <section class="section">
        <h2>Technologies Used</h2>
        <ul>
          <li><strong>Vue 3 Composition API</strong> – component logic and reactivity.</li>
          <li><strong>Vuex</strong> – centralized state management for horses, races, and results.</li>
          <li><strong>Vite</strong> – fast development and build tooling.</li>
          <li><strong>CSS Animations</strong> – for smooth race visuals.</li>
        </ul>
      </section>

      <section class="section">
        <h2>How It Works</h2>
        <ol>
          <li>Click <em>Generate</em> to create the horses and race schedule.</li>
          <li>Click <em>Start</em> to begin all six rounds sequentially.</li>
          <li>Watch horses race and view results in real time.</li>
        </ol>
      </section>

      <section class="section">
        <h2>Notes</h2>
        <p>
          The app’s structure is intentionally modular—ideal for scaling into a larger game or dashboard.
          Store actions handle all business logic, while components stay focused on presentation.
        </p>
      </section>

      <footer class="footer">
        <p>Built with ❤️ using Vue 3 & Vuex</p>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.about-page {
  display: flex;
  justify-content: center;
  padding: 40px 20px;
  background: linear-gradient(180deg, #f7f9fc 0%, #fff 100%);
  min-height: 100vh;
  color: #222;
}

.container {
  max-width: 760px;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.intro {
  font-size: 1.1rem;
  margin-bottom: 24px;
  line-height: 1.6;
}

.section {
  margin-bottom: 32px;
}

.section h2 {
  font-size: 1.3rem;
  margin-bottom: 10px;
}

.section ul,
.section ol {
  padding-left: 24px;
}

.section li {
  margin-bottom: 6px;
  list-style-type: disc;
}

.footer {
  text-align: center;
  margin-top: 48px;
  font-size: 0.9rem;
  color: #555;
}

h2 {
  font-weight: bold;
}
</style>
