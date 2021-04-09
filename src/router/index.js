import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Carte from '../views/Carte.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/carte',
    name: 'Carte',
    component: Carte,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
