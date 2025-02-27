<script>
import { defineComponent } from 'vue';
import { Line, Bar } from 'vue-chartjs';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default defineComponent({
  name: 'AnalyticsView',
  components: {
    Line,
    Bar
  },
  data() {
    return {
      performanceData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Team Performance',
          data: [65, 59, 80, 81, 56, 85],
          borderColor: '#3b82f6',
          tension: 0.4
        }]
      },
      projectData: {
        labels: ['Completed', 'In Progress', 'On Hold', 'Planned'],
        datasets: [{
          label: 'Project Status',
          data: [12, 19, 3, 5],
          backgroundColor: [
            '#10b981',
            '#3b82f6',
            '#f59e0b',
            '#6b7280'
          ]
        }]
      },
      metrics: [
        { label: 'Total Projects', value: '39', change: '+12%' },
        { label: 'Active Tasks', value: '189', change: '+24%' },
        { label: 'Team Efficiency', value: '94%', change: '+5%' },
        { label: 'Completed Tasks', value: '452', change: '+18%' }
      ]
    };
  }
});
</script>

<template>
  <div class="analytics">
    <div class="header">
      <h1>Analytics Dashboard</h1>
      <div class="header-actions">
        <button class="btn-secondary">Export Report</button>
        <button class="btn-primary">Generate Insights</button>
      </div>
    </div>

    <div class="metrics-grid">
      <div v-for="metric in metrics" :key="metric.label" class="metric-card">
        <div class="metric-info">
          <h3>{{ metric.label }}</h3>
          <p class="value">{{ metric.value }}</p>
        </div>
        <div :class="['change', metric.change.startsWith('+') ? 'positive' : 'negative']">
          {{ metric.change }}
        </div>
      </div>
    </div>

    <div class="charts-grid">
      <div class="chart-card">
        <h2>Performance Trends</h2>
        <div class="chart-container">
          <Line :data="performanceData" :options="{ responsive: true, maintainAspectRatio: false }" />
        </div>
      </div>

      <div class="chart-card">
        <h2>Project Distribution</h2>
        <div class="chart-container">
          <Bar :data="projectData" :options="{ responsive: true, maintainAspectRatio: false }" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.analytics {
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

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.metric-card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  .metric-info {
    h3 {
      font-size: 0.875rem;
      color: #6b7280;
      margin: 0 0 0.5rem 0;
    }

    .value {
      font-size: 1.5rem;
      font-weight: 600;
      color: #111827;
      margin: 0;
    }
  }

  .change {
    font-size: 0.875rem;
    font-weight: 500;
    padding: 0.25rem 0.5rem;
    border-radius: 9999px;

    &.positive {
      background-color: #dcfce7;
      color: #166534;
    }

    &.negative {
      background-color: #fee2e2;
      color: #991b1b;
    }
  }
}

.charts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
}

.chart-card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 1.125rem;
    color: #111827;
    margin: 0 0 1.5rem 0;
  }

  .chart-container {
    height: 300px;
  }
}

@media (max-width: 768px) {
  .analytics {
    margin-left: 64px;
  }

  .charts-grid {
    grid-template-columns: 1fr;
  }
}
</style>