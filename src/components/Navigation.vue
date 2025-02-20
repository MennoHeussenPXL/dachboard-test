<script>
import { defineComponent } from 'vue';
import { 
  HomeIcon, 
  UsersIcon, 
  DocumentTextIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/vue/24/outline';

export default defineComponent({
  name: 'Navigation',
  components: {
    HomeIcon,
    UsersIcon,
    DocumentTextIcon,
    ChevronLeftIcon,
    ChevronRightIcon
  },
  data() {
    return {
      isCollapsed: false,
      navigation: [
        { name: 'Dashboard', path: '/', icon: HomeIcon },
        { name: 'Users', path: '/users', icon: UsersIcon },
        { name: 'Posts', path: '/posts', icon: DocumentTextIcon }
      ]
    };
  },
  methods: {
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;
    }
  }
});
</script>

<template>
  <nav :class="['sidebar', { 'collapsed': isCollapsed }]">
    <div class="sidebar-header">
      <h2 v-if="!isCollapsed">Dashboard</h2>
      <button @click="toggleSidebar" class="toggle-btn">
        <ChevronLeftIcon v-if="!isCollapsed" class="w-6 h-6" />
        <ChevronRightIcon v-else class="w-6 h-6" />
      </button>
    </div>
    
    <ul class="nav-links">
      <li v-for="item in navigation" :key="item.path">
        <router-link :to="item.path" class="nav-link">
          <component :is="item.icon" class="w-6 h-6" />
          <span v-if="!isCollapsed">{{ item.name }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.sidebar {
  width: 250px;
  height: 100vh;
  background-color: #1a1a1a;
  color: white;
  transition: width 0.3s ease;
  position: fixed;
  left: 0;
  top: 0;

  &.collapsed {
    width: 64px;
  }
}

.sidebar-header {
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  h2 {
    margin: 0;
    font-size: 1.25rem;
  }
}

.toggle-btn {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }
}

.nav-links {
  list-style: none;
  padding: 1rem 0;
  margin: 0;
}

.nav-link {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  gap: 0.75rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &.router-link-active {
    color: white;
    background-color: rgba(255, 255, 255, 0.1);
  }
}

@media (max-width: 768px) {
  .sidebar {
    width: 64px;

    h2 {
      display: none;
    }

    .nav-link span {
      display: none;
    }
  }
}
</style>