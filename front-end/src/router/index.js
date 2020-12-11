import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: { title: "Home" }
    },
    {
        path: "/about",
        name: "About",

        component: () => import("../views/About.vue"),
        meta: { title: "About" }
    },
    {
        path: "/code",
        name: "Code List",
        component: () => import("../views/CodeList.vue"),
        meta: { title: "Codes" }
    },
    {
        path: "/code/new",
        name: "New Code",
        component: () => import("../views/NewCode.vue"),
        meta: { title: "New Code" }
    },
    {
        path: "/code/:id",
        name: "Code",
        component: () => import("../views/Code.vue"),
        meta: { title: "Code" }
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
