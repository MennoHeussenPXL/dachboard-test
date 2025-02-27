<script setup>
import Navigation from './components/Navigation.vue';
import TopNavigation from './components/TopNavigation.vue';
</script>

<template>
  <div class="app">
    <TopNavigation />
    <Navigation />
    <main class="main-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<style>
:root {
  --primary-color: #3b82f6;
  --text-color: #111827;
  --background-color: #f3f4f6;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  color: var(--text-color);
  background-color: var(--background-color);
}

.app {
  min-height: 100vh;
}

h1, h2, h3, h4, h5, h6 {
  color: var(--text-color);
  margin: 0;
}

a {
  color: var(--primary-color);
  text-decoration: none;
}

button {
  cursor: pointer;
}

.main-content {
  min-height: 100vh;
  background-color: var(--background-color);
}
</style>