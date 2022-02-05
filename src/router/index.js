import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const route = "/";
// /ecc/msatou/raict_app/

const routes = [
  {
    path: `${route}`,
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
