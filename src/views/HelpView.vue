<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelpView',
  data() {
    return {
      faqs: [
        {
          question: 'How do I create a new project?',
          answer: 'Navigate to the Projects page and click on the "New Project" button. Fill in the required information in the form and click "Create".'
        },
        {
          question: 'How can I assign tasks to team members?',
          answer: 'Go to the Tasks page, click "Add Task", select the assignee from the dropdown menu, and fill in the task details.'
        },
        {
          question: 'Where can I view project analytics?',
          answer: 'The Analytics page provides detailed insights about project performance, team efficiency, and other key metrics.'
        }
      ]
    };
  }
});
</script>

<template>
  <div class="help">
    <div class="header">
      <h1>Help Center</h1>
      <button class="btn-primary">Contact Support</button>
    </div>

    <div class="help-content">
      <div class="search-section">
        <div class="search-box">
          <input type="text" placeholder="Search for help..." />
          <button class="search-btn">Search</button>
        </div>
      </div>

      <div class="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div class="faq-list">
          <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
            <h3>{{ faq.question }}</h3>
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>

      <div class="support-cards">
        <div class="support-card">
          <h3>Documentation</h3>
          <p>Access detailed guides and documentation</p>
          <button class="btn-secondary">View Docs</button>
        </div>
        <div class="support-card">
          <h3>Video Tutorials</h3>
          <p>Watch step-by-step tutorial videos</p>
          <button class="btn-secondary">Watch Now</button>
        </div>
        <div class="support-card">
          <h3>Live Chat</h3>
          <p>Chat with our support team</p>
          <button class="btn-secondary">Start Chat</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.help {
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

.search-section {
  margin-bottom: 2rem;

  .search-box {
    display: flex;
    gap: 1rem;
    max-width: 600px;
    margin: 0 auto;

    input {
      flex: 1;
      padding: 0.75rem 1rem;
      border: 1px solid #e5e7eb;
      border-radius: 6px;
      font-size: 0.875rem;

      &:focus {
        outline: none;
        border-color: #3b82f6;
        box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
      }
    }

    .search-btn {
      padding: 0.75rem 1.5rem;
      background-color: #3b82f6;
      color: white;
      border: none;
      border-radius: 6px;
      font-size: 0.875rem;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.2s ease;

      &:hover {
        background-color: #2563eb;
      }
    }
  }
}

.faq-section {
  margin-bottom: 2rem;

  h2 {
    font-size: 1.25rem;
    color: #111827;
    margin-bottom: 1.5rem;
  }
}

.faq-list {
  display: grid;
  gap: 1rem;
}

.faq-item {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1rem;
    color: #111827;
    margin: 0 0 0.75rem 0;
  }

  p {
    font-size: 0.875rem;
    color: #4b5563;
    margin: 0;
    line-height: 1.5;
  }
}

.support-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.support-card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1.125rem;
    color: #111827;
    margin: 0 0 0.5rem 0;
  }

  p {
    font-size: 0.875rem;
    color: #6b7280;
    margin: 0 0 1rem 0;
  }
}

@media (max-width: 768px) {
  .help {
    margin-left: 64px;
  }

  .support-cards {
    grid-template-columns: 1fr;
  }
}
</style>