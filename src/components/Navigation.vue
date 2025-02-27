<script>
import { defineComponent } from 'vue';
import { 
  HomeIcon,
  InboxIcon,
  BriefcaseIcon,
  ChartBarIcon,
  UserGroupIcon,
  BellIcon,
  QuestionMarkCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/vue/24/outline';

export default defineComponent({
  name: 'Navigation',
  components: {
    HomeIcon,
    InboxIcon,
    BriefcaseIcon,
    ChartBarIcon,
    UserGroupIcon,
    BellIcon,
    QuestionMarkCircleIcon,
    ChevronLeftIcon,
    ChevronRightIcon
  },
  data() {
    return {
      isCollapsed: false,
      navigation: [
        { name: 'Dashboard', path: '/', icon: HomeIcon },
        { name: 'Inboxes', path: '/inboxes', icon: InboxIcon },
        { 
          name: 'Projects',
          path: '/projects',
          icon: BriefcaseIcon,
        },
        { name: 'Employee Tasks', path: '/tasks', icon: UserGroupIcon },
        { name: 'Analytics', path: '/analytics', icon: ChartBarIcon },
        { name: 'Client List', path: '/clients', icon: UserGroupIcon },
        { name: 'Notifications', path: '/notifications', icon: BellIcon },
        { name: 'Help Center', path: '/help', icon: QuestionMarkCircleIcon }
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
      <div class="logo-section" v-if="!isCollapsed">
        <h2>Manager Portal</h2>
      </div>
      <button @click="toggleSidebar" class="toggle-btn">
        <ChevronLeftIcon v-if="!isCollapsed" class="w-4 h-4" />
        <ChevronRightIcon v-else class="w-4 h-4" />
      </button>
    </div>
    
    <ul class="nav-links">
      <li v-for="item in navigation" :key="item.path">
        <router-link :to="item.path" class="nav-link">
          <component :is="item.icon" class="w-4 h-4" />
          <span v-if="!isCollapsed">{{ item.name }}</span>
        </router-link>
        <ul v-if="item.children && !isCollapsed" class="sub-menu">
          <li v-for="child in item.children" :key="child.path">
            <router-link :to="child.path" class="sub-link">
              {{ child.name }}
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.sidebar {
  width: 280px;
  height: 100vh;
  background-color: #1a1a1a;
  color: white;
  transition: all 0.3s ease;
  position: fixed;
  left: 0;
  top: 64px;
  display: flex;
  flex-direction: column;
  box-shadow: 4px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 100;

  &.collapsed {
    width: 64px;
  }
}

.sidebar-header {
  padding: 1.25rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  .logo-section {
    h2 {
      margin: 0;
      font-size: 1.25rem;
      font-weight: 600;
    }
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
  opacity: 0.7;

  &:hover {
    opacity: 1;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }
}

.nav-links {
  list-style: none;
  padding: 0.75rem 0;
  margin: 0;
  flex: 1;
}
.nav-link svg {
  list-style: none;
  padding: 0.75rem 0;
  margin: 0;
  flex: 1;
  height: 50px;
}

.nav-link {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  gap: 0.75rem;
  font-size: 0.875rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
  }

  &.router-link-active {
    color: white;
    background-color: #3b82f6;
  }
}

.sub-menu {
  list-style: none;
  padding-left: 2.5rem;
  margin: 0;
}

.sub-link {
  display: block;
  padding: 0.5rem 1rem;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 0.813rem;
  transition: all 0.2s ease;

  &:hover {
    color: white;
  }

  &.router-link-active {
    color: white;
  }
}

@media (max-width: 768px) {
  .sidebar {
    width: 64px;

    .logo-section {
      display: none;
    }

    .nav-link span {
      display: none;
    }

    .sub-menu {
      display: none;
    }
  }
}
</style>