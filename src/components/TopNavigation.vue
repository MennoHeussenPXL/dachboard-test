<script>
import { defineComponent } from 'vue';
import { BellIcon, UserCircleIcon } from '@heroicons/vue/24/outline';

export default defineComponent({
  name: 'TopNavigation',
  components: {
    BellIcon,
    UserCircleIcon
  }
});
</script>

<template>
  <nav class="top-nav">
    <div class="nav-content">
      <div class="nav-left">
        <h1>Dashboard</h1>
      </div>
      <div class="nav-right">
        <button class="icon-btn">
          <BellIcon class="w-5 h-5" />
        </button>
        <button class="icon-btn">
          <UserCircleIcon class="w-5 h-5" />
        </button>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.top-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  background-color: white;
  border-bottom: 1px solid #e5e7eb;
  z-index: 101;
}

.nav-content {
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-left {
  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #111827;
  }
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.icon-btn {
  background: none;
  border: none;
  padding: 0.5rem;
  color: #6b7280;
  cursor: pointer;
  border-radius: 9999px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f3f4f6;
    color: #111827;
  }
}
</style>