import Vue from "vue";
import VueRouter from "vue-router";
import TheHome from "@/views/TheHome.vue";
import TheRouterView from "@/components/TheRouterView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
    component: TheRouterView,
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

const router = new VueRouter({
  routes,
});

export default router;
