<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ClientsView',
  data() {
    return {
      clients: [
        {
          id: 1,
          name: 'TechCorp Solutions',
          contact: 'John Anderson',
          email: 'j.anderson@techcorp.com',
          projects: 3,
          status: 'Active'
        },
        {
          id: 2,
          name: 'Global Innovations',
          contact: 'Sarah Miller',
          email: 's.miller@globalinno.com',
          projects: 2,
          status: 'Active'
        },
        {
          id: 3,
          name: 'Creative Studios',
          contact: 'Mike Wilson',
          email: 'm.wilson@creative.co',
          projects: 1,
          status: 'Inactive'
        }
      ]
    };
  }
});
</script>

<template>
  <div class="clients">
    <div class="header">
      <h1>Client List</h1>
      <div class="header-actions">
        <button class="btn-secondary">Import</button>
        <button class="btn-primary">Add Client</button>
      </div>
    </div>

    <div class="clients-table">
      <table>
        <thead>
          <tr>
            <th>Client Name</th>
            <th>Contact Person</th>
            <th>Email</th>
            <th>Active Projects</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="client in clients" :key="client.id">
            <td>{{ client.name }}</td>
            <td>{{ client.contact }}</td>
            <td>{{ client.email }}</td>
            <td>{{ client.projects }}</td>
            <td>
              <span :class="['status-badge', client.status.toLowerCase()]">
                {{ client.status }}
              </span>
            </td>
            <td>
              <div class="actions">
                <button class="btn-icon">Edit</button>
                <button class="btn-icon">View</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.clients {
  padding: 1.5rem;
  margin-top: 64px;
  margin-left: 280px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;

    .header-actions {
      display: flex;
      gap: 1rem;
    }
  }
}

.btn-primary {
  background-color: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: none;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #2563eb;
  }
}

.btn-secondary {
  background-color: white;
  color: #4b5563;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: 1px solid #e5e7eb;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f9fafb;
    border-color: #d1d5db;
  }
}

.clients-table {
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow-x: auto;

  table {
    width: 100%;
    border-collapse: collapse;

    th, td {
      padding: 1rem;
      text-align: left;
      border-bottom: 1px solid #e5e7eb;
    }

    th {
      font-size: 0.875rem;
      font-weight: 500;
      color: #6b7280;
      background-color: #f9fafb;
    }

    td {
      font-size: 0.875rem;
      color: #111827;
    }
  }
}

.status-badge {
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-weight: 500;

  &.active {
    background-color: #dcfce7;
    color: #166534;
  }

  &.inactive {
    background-color: #f3f4f6;
    color: #4b5563;
  }
}

.actions {
  display: flex;
  gap: 0.5rem;
}

.btn-icon {
  background: none;
  border: none;
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #111827;
  }
}

@media (max-width: 768px) {
  .clients {
    margin-left: 64px;
  }
}
</style>