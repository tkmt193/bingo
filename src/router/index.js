import { createRouter, createWebHistory } from 'vue-router';
import BingoCard from '../components/BingoCard.vue';
import BingoNumber from '../components/BingoNumber.vue';

const routes = [
  {
    path: '/bingo-card',
    name: 'BingoCard',
    component: BingoCard,
  },
  {
    path: '/bingo-number',
    name: 'BingoNumber',
    component: BingoNumber,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
