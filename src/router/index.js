import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Carte from '../views/Carte.vue';
import Methodo from '../views/Methodo.vue';
import Contact from '../views/Contact.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/carte',
    name: 'Carte',
    component: Carte,
  },
  {
    path: '/methodologie',
    name: 'Methodo',
    component: Methodo,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
