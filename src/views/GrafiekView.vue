<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GrafiekView'
});
</script>

<template>
  <div class="grafiek">
    <h1>Grafiek</h1>
    <div class="table-container">
      <img src="../assets/grafiek.svg" alt="Grafiek">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.grafiek {
  h1 {
    margin-bottom: 2rem;
  }
}

.table-container {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid #eee;
  }

  th {
    background-color: #f8f9fa;
    font-weight: 600;
  }

  tr:hover {
    background-color: #f8f9fa;
  }
}
</style>