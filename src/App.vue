<script setup lang="ts">
import Dashboard from './components/Dashboard.vue';
</script>

<template>
  <Dashboard />
</template>

<style>
:root {
  --primary-color: #646cff;
  --text-color: #213547;
  --background-color: #f5f5f5;
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

#app {
  height: 100vh;
}

h1 {
  font-size: 2rem;
  font-weight: 600;
  color: var(--text-color);
}

a {
  color: var(--primary-color);
  text-decoration: none;
}

button {
  cursor: pointer;
}
</style>