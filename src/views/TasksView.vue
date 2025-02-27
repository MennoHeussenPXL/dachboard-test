<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TasksView',
  data() {
    return {
      tasks: [
        {
          id: 1,
          title: 'Review Q1 Reports',
          assignee: 'John Smith',
          dueDate: '2024-03-25',
          priority: 'High',
          status: 'In Progress'
        },
        {
          id: 2,
          title: 'Update Client Documentation',
          assignee: 'Sarah Johnson',
          dueDate: '2024-03-28',
          priority: 'Medium',
          status: 'Pending'
        },
        {
          id: 3,
          title: 'Prepare Team Meeting Agenda',
          assignee: 'Mike Brown',
          dueDate: '2024-03-22',
          priority: 'Low',
          status: 'Completed'
        }
      ]
    };
  }
});
</script>

<template>
  <div class="tasks">
    <div class="header">
      <h1>Employee Tasks</h1>
      <div class="header-actions">
        <button class="btn-secondary">Filter</button>
        <button class="btn-primary">Add Task</button>
      </div>
    </div>

    <div class="tasks-grid">
      <div v-for="task in tasks" :key="task.id" class="task-card">
        <div class="task-header">
          <h3>{{ task.title }}</h3>
          <span :class="['priority-badge', task.priority.toLowerCase()]">
            {{ task.priority }}
          </span>
        </div>
        
        <div class="task-details">
          <div class="detail-item">
            <span class="label">Assignee:</span>
            <span class="value">{{ task.assignee }}</span>
          </div>
          <div class="detail-item">
            <span class="label">Due Date:</span>
            <span class="value">{{ task.dueDate }}</span>
          </div>
          <div class="detail-item">
            <span class="label">Status:</span>
            <span :class="['status-badge', task.status.toLowerCase().replace(' ', '-')]">
              {{ task.status }}
            </span>
          </div>
        </div>

        <div class="task-actions">
          <button class="btn-secondary">Edit</button>
          <button class="btn-secondary">Complete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tasks {
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

.tasks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.task-card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  .task-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1.5rem;

    h3 {
      font-size: 1.125rem;
      color: #111827;
      margin: 0;
      flex: 1;
      padding-right: 1rem;
    }
  }
}

.priority-badge {
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-weight: 500;

  &.high {
    background-color: #fee2e2;
    color: #991b1b;
  }

  &.medium {
    background-color: #fef3c7;
    color: #92400e;
  }

  &.low {
    background-color: #dcfce7;
    color: #166534;
  }
}

.task-details {
  margin-bottom: 1.5rem;

  .detail-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;

    &:last-child {
      margin-bottom: 0;
    }

    .label {
      font-size: 0.875rem;
      color: #6b7280;
    }

    .value {
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

  &.in-progress {
    background-color: #dbeafe;
    color: #1e40af;
  }

  &.pending {
    background-color: #fef3c7;
    color: #92400e;
  }

  &.completed {
    background-color: #dcfce7;
    color ```
    color: #166534;
  }
}

.task-actions {
  display: flex;
  gap: 0.75rem;

  button {
    flex: 1;
  }
}

@media (max-width: 768px) {
  .tasks {
    margin-left: 64px;
  }
}
</style>
  }
}