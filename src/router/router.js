import { createRouter, createWebHistory } from "vue-router";
import ProductItems from "@/views/products/ProductItems";

const routes = createRouter({
  history: createWebHistory(),
  route: [
    {
      path: "/",
      name: "ProductItems",
      component: "ProductItems",
    },
  ],
});

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
