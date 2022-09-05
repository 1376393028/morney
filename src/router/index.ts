import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/money'
  },
  {
    path: '/money',
    component: () => import('@/views/Money.vue'),
  },
  {
    path: '/labels',
    component: () => import('@/views/Labels.vue'),
  },
  {
    path: '/statistics',
    component: () => import('@/views/Statistics.vue'),
  }
]

const router = new VueRouter({
  routes
})

export default router
