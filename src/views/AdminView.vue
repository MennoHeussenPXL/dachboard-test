<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AdminView',
  data() {
    return {
      profile: {
        name: 'John Doe',
        email: 'john@example.com',
        role: 'Administrator',
        joinDate: '2024-01-15',
        lastLogin: '2024-03-20 09:45 AM'
      },
      stats: [
        { label: 'Active Users', value: '1,234' },
        { label: 'Total Posts', value: '5,678' },
        { label: 'System Uptime', value: '99.9%' },
        { label: 'Storage Used', value: '45.8GB' }
      ]
    };
  }
});
</script>

<template>
  <div class="admin">
    <div class="header">
      <h1>Admin Dashboard</h1>
      <div class="actions">
        <button class="btn">Settings</button>
        <button class="btn btn-primary">New Update</button>
      </div>
    </div>

    <div class="grid-container">
      <div class="profile-card">
        <div class="profile-header">
          <div class="avatar">{{ profile.name[0] }}</div>
          <div class="profile-info">
            <h2>{{ profile.name }}</h2>
            <p>{{ profile.email }}</p>
          </div>
        </div>
        <div class="profile-details">
          <div class="detail-item">
            <span class="label">Role</span>
            <span class="value">{{ profile.role }}</span>
          </div>
          <div class="detail-item">
            <span class="label">Join Date</span>
            <span class="value">{{ profile.joinDate }}</span>
          </div>
          <div class="detail-item">
            <span class="label">Last Login</span>
            <span class="value">{{ profile.lastLogin }}</span>
          </div>
        </div>
      </div>

      <div class="stats-grid">
        <div v-for="(stat, index) in stats" :key="index" class="stat-card">
          <h3>{{ stat.label }}</h3>
          <p>{{ stat.value }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.admin {
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;

    .actions {
      display: flex;
      gap: 1rem;
    }
  }
}

.btn {
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid #e2e8f0;
  background-color: white;
  color: #64748b;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f8fafc;
  }

  &.btn-primary {
    background-color: #3b82f6;
    color: white;
    border: none;

    &:hover {
      background-color: #2563eb;
    }
  }
}

.grid-container {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 1.5rem;
}

.profile-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  .profile-header {
    padding: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    border-bottom: 1px solid #e2e8f0;

    .avatar {
      width: 60px;
      height: 60px;
      background-color: #3b82f6;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.5rem;
      font-weight: 600;
    }

    .profile-info {
      h2 {
        margin: 0;
        font-size: 1.25rem;
        color: #1e293b;
      }

      p {
        margin: 0;
        font-size: 0.875rem;
        color: #64748b;
      }
    }
  }

  .profile-details {
    padding: 1.5rem;

    .detail-item {
      display: flex;
      justify-content: space-between;
      padding: 0.75rem 0;
      border-bottom: 1px solid #e2e8f0;

      &:last-child {
        border-bottom: none;
      }

      .label {
        color: #64748b;
        font-size: 0.875rem;
      }

      .value {
        color: #1e293b;
        font-weight: 500;
        font-size: 0.875rem;
      }
    }
  }
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.stat-card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h3 {
    margin: 0;
    font-size: 0.875rem;
    color: #64748b;
    margin-bottom: 0.5rem;
  }

  p {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
    color: #1e293b;
  }
}

@media (max-width: 1024px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}
</style>