import { createRouter, createWebHistory, type Router } from "vue-router";

const router: Router = createRouter({
    routes: [{
        path: "/",
        redirect: "/users",
    }, {
        path: "/users",
        component: () => import("../pages/Users.vue")
    }, {
        path: "/users/:id",
        component: () => import("../pages/UserDetail.vue"),
        props: true
    }, {
        path: "/:pathMatch(.*)*",
        component: () => import("../pages/NotFoundPage.vue")
    }],
    history: createWebHistory()
})

export default router;