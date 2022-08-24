import {createRouter, createWebHistory} from "vue-router";
import ProductList from "@/views/products/ProductList";

const routes = [
    {
        path: "/",
        name: "ProductList",
        component: ProductList,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;
