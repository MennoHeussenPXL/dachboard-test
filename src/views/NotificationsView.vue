<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NotificationsView',
  data() {
    return {
      notifications: [
        {
          id: 1,
          type: 'alert',
          message: 'Project deadline approaching: Website Redesign',
          time: '2 hours ago',
          read: false
        },
        {
          id: 2,
          type: 'info',
          message: 'New team member added to Mobile App project',
          time: '5 hours ago',
          read: false
        },
        {
          id: 3,
          type: 'success',
          message: 'Task completed: Q1 Report Review',
          time: '1 day ago',
          read: true
        }
      ]
    };
  }
});
</script>

<template>
  <div class="notifications">
    <div class="header">
      <h1>Notifications</h1>
      <div class="header-actions">
        <button class="btn-secondary">Mark All Read</button>
        <button class="btn-primary">Settings</button>
      </div>
    </div>

    <div class="notifications-list">
      <div v-for="notification in notifications" 
           :key="notification.id" 
           :class="['notification-card', { unread: !notification.read }]">
        <div class="notification-icon" :class="notification.type">
          <span class="icon">
            {{ notification.type === 'alert' ? '⚠️' : 
               notification.type === 'info' ? 'ℹ️' : '✅' }}
          </span>
        </div>
        <div class="notification-content">
          <p class="message">{{ notification.message }}</p>
          <span class="time">{{ notification.time }}</span>
        </div>
        <button class="btn-icon">•••</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.notifications {
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

.notifications-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.notification-card {
  background: white;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  &.unread {
    background-color: #f0f9ff;
    border-left: 3px solid #3b82f6;
  }

  .notification-icon {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    &.alert {
      background-color: #fee2e2;
    }

    &.info {
      background-color: #dbeafe;
    }

    &.success {
      background-color: #dcfce7;
    }

    .icon {
      font-size: 1.25rem;
    }
  }

  .notification-content {
    flex: 1;

    .message {
      font-size: 0.875rem;
      color: #111827;
      margin: 0 0 0.25rem 0;
    }

    .time {
      font-size: 0.75rem;
      color: #6b7280;
    }
  }
}

.btn-icon {
  background: none;
  border: none;
  padding: 0.5rem;
  color: #6b7280;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #111827;
  }
}

@media (max-width: 768px) {
  .notifications {
    margin-left: 64px;
  }
}
</style>