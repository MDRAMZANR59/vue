import { createWebHistory, createRouter } from "vue-router";

const routes=[
    {
        path:'/home',
        asias:'/home',
        name:'home',
        component:()=> import('./components/Home')
    },
    {
        path:'/invoice',
        asias:'/invoice',
        name:'invoice',
        component:()=>import('./components/Invoice')
    },
   {
    path:'/userprofile',
    assias:'/userprofile',
    name:'userprofile',
    component:()=> import('./components/UserProfile')
   }
];

const router=createRouter({
    history:createWebHistory(),
    routes,
});

export default router;
