<script>
import { defineComponent } from 'vue';
import Navigation from './Navigation.vue';

export default defineComponent({
  name: 'Dashboard',
  components: {
    Navigation
  }
});
</script>

<template>
  <div class="dashboard-container">
    <Navigation />
    <main class="main-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.dashboard-container {
  min-height: 100vh;
  background-color: #f5f5f5;
}

.main-content {

  padding: 2rem;
  min-height: 100vh;
  transition: margin-left 0.3s ease;
}

@media (max-width: 768px) {
  .main-content {
    margin-left: 64px;
  }
}
</style>