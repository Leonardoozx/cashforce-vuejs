import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import FiscalNotes from '../views/FiscalNotes.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/fiscal-notes',
    name: 'FiscalNotes',
    component: FiscalNotes,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
