<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DashboardView'
});
</script>

<template>
  <div class="dashboard">
    <div class="top-section">
      <div class="stat-card">
        <h3>Active Employees</h3>
        <p>547</p>
      </div>
      <div class="stat-card">
        <h3>Number of Projects</h3>
        <p>339</p>
      </div>
      <div class="stat-card">
        <h3>Number of Tasks</h3>
        <p>147</p>
      </div>
      <div class="stat-card">
        <h3>Target Percentage Completed</h3>
        <p>89.75%</p>
      </div>
    </div>
    <div class="middle-section">
      <div class="ongoing-tasks">
        <h3>On Going Task</h3>
        <div class="task">
          <h4>Journey Scarves (Branding and Website Design)</h4>
          <p>Assignee: Edifer</p>
          <p>Due Date: Aug 19, 2024</p>
          <p>Completion Status: 51%</p>
        </div>
        <div class="task">
          <h4>Edifer (Web Design & Development)</h4>
          <p>Assignee: Lgreen</p>
          <p>Due Date: Aug 19, 2024</p>
        </div>
      </div>
      <div class="graphs-analysis">
        <h3>Graphs and Analysis</h3>
        <img src="../assets/grafiek.svg" alt="Bar Chart">
      </div>
    </div>
    <div class="bottom-section">
      <div class="top-performers">
        <div class="performer">
          <img src="../assets/jonathan.jpg" alt="Jonathan">
          <p>Jonathan</p>
        </div>
        <div class="performer">
          <img src="../assets/sarah.jpg" alt="Sarah">
          <p>Sarah</p>
        </div>
        <div class="performer">
          <img src="../assets/mathew.jpg" alt="Mathew">
          <p>Mathew</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dashboard {
  width: 100%; /* Make the dashboard take the full width of the page */
  padding: 20px; /* Add padding to the dashboard */

  .top-section, .middle-section, .bottom-section {
    display: flex;
    gap: 20px; /* Set gap between cards */
    margin-bottom: 20px;
  }

  .stat-card, .ongoing-tasks, .graphs-analysis, .top-performers {
    flex: 1; /* Make each section take up equal space */
    background: white;
    padding: 20px; /* Set padding inside each card */
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .stat-card h3, .ongoing-tasks h3, .graphs-analysis h3, .top-performers h3 {
    color: #666;
    margin-bottom: 0.5rem;
  }

  .stat-card p, .ongoing-tasks p, .top-performers p {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
  }

  .task {
    margin-bottom: 1rem;
  }

  .performer {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .performer img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
}
</style>