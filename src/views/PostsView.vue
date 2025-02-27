<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PostsView'
});
</script>

<template>
  <div class="posts">
    <h1>Posts</h1>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Getting Started with Vue.js</td>
            <td>John Doe</td>
            <td>2024-03-15</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Vue.js Best Practices</td>
            <td>Jane Smith</td>
            <td>2024-03-14</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.posts {
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