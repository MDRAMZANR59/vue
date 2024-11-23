import { createWebHistory, createRouter } from "vue-router";

const routes=[
    {
        path:'/home',
        asias:'/home',
        name:'home',
        component:()=> import('./components/Home.vue')
    }
];

const router=createRouter({
    history:createWebHistory(),
    routes,
});

export default router;
