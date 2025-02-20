<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView'
});
</script>

<template>
  <div class="home">
    <h1>Dashboard Overview</h1>
    <div class="dashboard-stats">
      <div class="stat-card">
        <h3>Total Users</h3>
        <p>1,234</p>
      </div>
      <div class="stat-card">
        <h3>Total Posts</h3>
        <p>5,678</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  h1 {
    margin-bottom: 2rem;
  }
}

.dashboard-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.stat-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h3 {
    color: #666;
    margin: 0 0 0.5rem 0;
  }

  p {
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
    color: #333;
  }
}
</style>