import { createRouter, createWebHistory, type Router } from "vue-router";
import Users from "../pages/Users.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";
import UserDetail from "../pages/UserDetail.vue";

const router: Router = createRouter({
    routes: [{
        path: "/",
        redirect: "/users",
    }, {
        path: "/users",
        component: Users
    }, {
        path: "/users/:id",
        component: UserDetail, props: true
    }, {
        path: "/:pathMatch(.*)*",
        component: NotFoundPage
    }],
    history: createWebHistory()
})

export default router;