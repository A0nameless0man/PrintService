import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Code List",
        component: () => import("../views/CodeList.vue"),
        meta: { title: "Codes" }
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("../views/Login.vue"),
        meta: { title: "Codes" }
    },
    {
        path: "/new",
        name: "New Code",
        component: () => import("../views/NewCode.vue"),
        meta: { title: "New Code" }
    },
    {
        path: "/:id",
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
