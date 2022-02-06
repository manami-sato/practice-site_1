import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const route = "manami-sato.github.io/practice-site_1/";
// manami-sato.github.io/practice-site_1/
// /ecc/msatou/test/

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
