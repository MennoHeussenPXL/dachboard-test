<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProjectsView',
  data() {
    return {
      projects: [
        {
          id: 1,
          name: 'Website Redesign',
          client: 'TechCorp Inc.',
          progress: 75,
          status: 'In Progress',
          dueDate: '2024-04-15'
        },
        {
          id: 2,
          name: 'Mobile App Development',
          client: 'StartUp Ltd.',
          progress: 30,
          status: 'In Progress',
          dueDate: '2024-05-20'
        },
        {
          id: 3,
          name: 'Brand Identity',
          client: 'Fashion House',
          progress: 90,
          status: 'Review',
          dueDate: '2024-03-30'
        }
      ]
    };
  }
});
</script>

<template>
  <div class="projects">
    <div class="header">
      <h1>Projects</h1>
      <button class="btn-primary">New Project</button>
    </div>

    <div class="project-grid">
      <div v-for="project in projects" :key="project.id" class="project-card">
        <div class="project-header">
          <h3>{{ project.name }}</h3>
          <span :class="['status-badge', project.status.toLowerCase()]">
            {{ project.status }}
          </span>
        </div>
        <p class="client">{{ project.client }}</p>
        <div class="progress-section">
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: project.progress + '%' }"></div>
          </div>
          <span class="progress-text">{{ project.progress }}%</span>
        </div>
        <div class="project-footer">
          <span class="due-date">Due: {{ project.dueDate }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projects {
  padding: 1.5rem;
  margin-top: 64px;
  margin-left: 280px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
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

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.project-card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  .project-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;

    h3 {
      font-size: 1.125rem;
      color: #111827;
      margin: 0;
    }
  }

  .client {
    font-size: 0.875rem;
    color: #6b7280;
    margin-bottom: 1rem;
  }
}

.status-badge {
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-weight: 500;

  &.progress {
    background-color: #dbeafe;
    color: #1e40af;
  }

  &.review {
    background-color: #fef3c7;
    color: #92400e;
  }
}

.progress-section {
  margin-bottom: 1rem;
}

.progress-bar {
  height: 6px;
  background-color: #e5e7eb;
  border-radius: 9999px;
  overflow: hidden;
  margin-bottom: 0.5rem;

  .progress-fill {
    height: 100%;
    background-color: #3b82f6;
    transition: width 0.3s ease;
  }
}

.progress-text {
  font-size: 0.875rem;
  color: #6b7280;
}

.project-footer {
  .due-date {
    font-size: 0.875rem;
    color: #6b7280;
  }
}

@media (max-width: 768px) {
  .projects {
    margin-left: 64px;
  }
}
</style>