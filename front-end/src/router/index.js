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
        path: "/article/:id",
        name: "article",
        component: () => import("../views/Article.vue"),
        meta: { title: "Article" }
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
