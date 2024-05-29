import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/Login.vue";
import NotFound from "../components/NotFound.vue";
import DashBoard from "../components/DashBoard.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:catchAll(.*)",
      component: NotFound,
      beforeEnter: (to, from) => {
        return true;
      },
      meta: {
        hideNavi: true,
      },
    },
    {
      path: "/",
      name: "default",
      redirect: (to) => {
        return "login";
      },
      meta: {
        title: "ルート | PREP",
        hideNavi: true,
      },
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        title: "ログイン | PREP",
        hideNavi: true,
      },
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashBoard,
      meta: {
        title: "ログイン | PREP",
      },
    },
  ],
});

export default router;
