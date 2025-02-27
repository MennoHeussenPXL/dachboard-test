<script>
import { defineComponent } from 'vue';
import { Line } from 'vue-chartjs';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default defineComponent({
  name: 'HomeView',
  components: {
    Line
  },
  data() {
    return {
      metrics: [
        { label: 'Active Employees', value: '547', icon: '👥' },
        { label: 'Number of Projects', value: '339', icon: '📊' },
        { label: 'Number of Tasks', value: '147', icon: '✓' },
        { label: 'Target % Completed', value: '89.75%', icon: '🎯' }
      ],
      tasks: [
        { name: 'Journey Scraves', type: 'Marketing and Website Design' },
        { name: 'Editor', type: 'Editing' },
        { name: 'Ugreen', type: 'Logistics' },
        { name: 'CNN', type: 'Marketing and Sponsored Content' }
      ],
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'Performance',
            data: [65, 59, 80, 81, 56, 85],
            fill: false,
            borderColor: '#3b82f6',
            tension: 0.4
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      },
      topPerformers: [
        { name: 'John Smith', score: '98%' },
        { name: 'Sarah Johnson', score: '95%' },
        { name: 'Michael Brown', score: '93%' }
      ]
    };
  }
});
</script>

<template>
  <div class="dashboard">
    <div class="alert-card">
      <div class="alert-content">
        <p>"Dear Manager, We have observed a decline in [Employee's] performance over the past 2 weeks."</p>
        <button class="btn-primary">View Detail</button>
      </div>
    </div>

    <div class="metrics-grid">
      <div v-for="metric in metrics" :key="metric.label" class="metric-card">
        <span class="metric-icon">{{ metric.icon }}</span>
        <div class="metric-info">
          <h3>{{ metric.label }}</h3>
          <p>{{ metric.value }}</p>
        </div>
      </div>
    </div>

    <div class="content-grid">
      <div class="tasks-section">
        <h2>Ongoing Tasks</h2>
        <div class="tasks-list">
          <div v-for="task in tasks" :key="task.name" class="task-card">
            <h4>{{ task.name }}</h4>
            <p>{{ task.type }}</p>
          </div>
        </div>
      </div>

      <div class="analysis-section">
        <div class="chart-container">
          <h2>Performance Analysis</h2>
          <div class="chart">
            <Line :data="chartData" :options="chartOptions" />
          </div>
        </div>

        <div class="top-performers">
          <h2>Top Performance</h2>
          <div class="performers-list">
            <div v-for="performer in topPerformers" :key="performer.name" class="performer-card">
              <span class="performer-name">{{ performer.name }}</span>
              <span class="performer-score">{{ performer.score }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dashboard {
  padding: 1.5rem;
  margin-top: 64px;
  margin-left: 280px;
  transition: margin-left 0.3s ease;
}

.alert-card {
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  .alert-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    p {
      font-size: 1rem;
      color: #374151;
      margin: 0;
    }
  }
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.metric-card {
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  .metric-icon {
    font-size: 1.5rem;
  }

  .metric-info {
    h3 {
      font-size: 0.875rem;
      color: #6b7280;
      margin: 0 0 0.25rem 0;
    }

    p {
      font-size: 1.5rem;
      font-weight: 600;
      color: #111827;
      margin: 0;
    }
  }
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 1.5rem;
}

.tasks-section, .analysis-section {
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 1.25rem;
    color: #111827;
    margin: 0 0 1rem 0;
  }
}

.tasks-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.task-card {
  padding: 1rem;
  border-radius: 6px;
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;

  h4 {
    font-size: 0.875rem;
    color: #111827;
    margin: 0 0 0.25rem 0;
  }

  p {
    font-size: 0.75rem;
    color: #6b7280;
    margin: 0;
  }
}

.chart-container {
  margin-bottom: 1.5rem;

  .chart {
    height: 300px;
  }
}

.performers-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.performer-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  background-color: #f9fafb;
  border-radius: 6px;

  .performer-name {
    font-size: 0.875rem;
    color: #111827;
  }

  .performer-score {
    font-size: 0.875rem;
    font-weight: 600;
    color: #059669;
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

@media (max-width: 1024px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .dashboard {
    margin-left: 64px;
  }
}
</style>