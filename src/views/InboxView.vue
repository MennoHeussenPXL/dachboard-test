<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InboxView',
  data() {
    return {
      messages: [
        {
          id: 1,
          sender: 'Sarah Johnson',
          subject: 'Project Update - Website Redesign',
          preview: 'Hi, I wanted to share the latest progress on...',
          date: '2024-03-20 10:30 AM',
          unread: true
        },
        {
          id: 2,
          sender: 'Mike Thompson',
          subject: 'Client Meeting Notes',
          preview: 'Here are the key points from today\'s meeting...',
          date: '2024-03-20 09:15 AM',
          unread: false
        },
        {
          id: 3,
          sender: 'Emily Davis',
          subject: 'New Task Assignment',
          preview: 'Please review the following tasks for this week...',
          date: '2024-03-19 04:45 PM',
          unread: true
        }
      ]
    };
  }
});
</script>

<template>
  <div class="inbox">
    <div class="header">
      <h1>Inbox</h1>
      <button class="btn-primary">Compose</button>
    </div>

    <div class="messages">
      <div v-for="message in messages" 
           :key="message.id" 
           :class="['message-card', { unread: message.unread }]">
        <div class="message-content">
          <h3>{{ message.subject }}</h3>
          <p class="sender">{{ message.sender }}</p>
          <p class="preview">{{ message.preview }}</p>
        </div>
        <div class="message-meta">
          <span class="date">{{ message.date }}</span>
          <span v-if="message.unread" class="unread-badge"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.inbox {
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

.messages {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.message-card {
  background: white;
  border-radius: 8px;
  padding: 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &.unread {
    background: #f0f9ff;
    border-left: 3px solid #3b82f6;
  }

  .message-content {
    flex: 1;

    h3 {
      font-size: 1rem;
      color: #111827;
      margin: 0 0 0.5rem 0;
    }

    .sender {
      font-size: 0.875rem;
      color: #4b5563;
      margin: 0 0 0.25rem 0;
    }

    .preview {
      font-size: 0.875rem;
      color: #6b7280;
      margin: 0;
    }
  }

  .message-meta {
    display: flex;
    align-items: center;
    gap: 1rem;

    .date {
      font-size: 0.75rem;
      color: #6b7280;
    }

    .unread-badge {
      width: 8px;
      height: 8px;
      background-color: #3b82f6;
      border-radius: 50%;
    }
  }
}

@media (max-width: 768px) {
  .inbox {
    margin-left: 64px;
  }
}
</style>