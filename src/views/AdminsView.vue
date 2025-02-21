<template>
  <div class="admins">
    <h1>Admins</h1>
    <div class="table-container">
      <table>
        <thead>
        <tr>
          <th>Studentnummer</th>
          <th>Voornaam</th>
          <th>Achternaam</th>
          <th>Email</th>
          <th>Rol</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="admin in admins" :key="admin.id">
          <td>{{ admin.id }}</td>
          <td>{{ admin.name }}</td>
          <td>{{ admin.lastName }}</td>
          <td>{{ admin.email }}</td>
          <td>{{ admin.role }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      admins: [
        { id: 12300183, name: 'Menno', lastName: 'Heussen', email: '12300183@student.pxl.be', role: 'Admin' },
        { id: 2, name: 'Name', lastName: 'LastName', email: 'admin2@example.com', role: 'Admin' }
      ]
    }
  }
}
</script>

<style scoped>
.admins {
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