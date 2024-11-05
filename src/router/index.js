import { createRouter, createWebHistory } from 'vue-router'
import TheHome from '@/views/TheHome.vue'

const routes = [
  {
    path: "/",
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "Home",
        component: TheHome,
      },
      {
        path: "cp01",
        name: "cp01",
        component: () => import("@/views/cp01/index.vue"),
      },
      {
        path: "cp02",
        name: "cp02",
        component: () => import("@/views/cp02/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;
