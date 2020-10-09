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
        path: "/article",
        name: "Article List",
        component: () => import("../views/ArticleList.vue"),
        meta: { title: "Articles" }
    },
    {
        path: "/article/new",
        name: "New Article",
        component: () => import("../views/NewArticle.vue"),
        meta: { title: "New Article" }
    },
    {
        path: "/article/:id",
        name: "Article",
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
