import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const route = "/practice-site_1/";
// /practice-site_1/

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
