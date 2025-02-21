import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import UsersView from '../views/UsersView.vue';
import AdminsView from '../views/AdminsView.vue';
import GrafiekView from "../views/GrafiekView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/users',
    name: 'users',
    component: UsersView
  },
  {
    path: '/grafiek',
    name: 'Grafiek',
    component: GrafiekView
  },
  {
    path: '/admins',
    name: 'admins',
    component: AdminsView // Voeg de nieuwe route toe
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;