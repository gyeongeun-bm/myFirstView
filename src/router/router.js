import { createRouter, createWebHistory } from "vue-router";
import ProductList from "@/views/products/ProductList";
import ProductInfoItem from "@/views/products/ProductInfoItem";

const routes = [
  {
    path: "/",
    name: "ProductList",
    component: ProductList,
  },
  {
    path: "/product/:id",
    name: "ProductInfoItem",
    component: ProductInfoItem,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
