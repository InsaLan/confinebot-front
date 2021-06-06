import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/views/Login.vue';
import Home from '@/views/Home.vue';
import Settings from '@/views/Settings.vue';
import Match from '@/views/Match.vue';
import Team from '@/views/Team.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings,
  },
  {
    path: '/about',
    name: 'about',
  },
  {
    path: '/match',
    name: 'match',
    component: Match,
  },
  {
    path: '/stats',
    name: 'stats',
  },
  {
    path: '/team',
    name: 'team',
    component: Team,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
