import { createWebHistory, createRouter } from "vue-router";

const routes=[
    {
        path:'/',
        asias:'/login',
        name:'login',
        component:()=> import('./components/LoginForm')
    },
    {
        path:'/home',
        asias:'/home',
        name:'home',
        component:()=> import('./components/Home')
    },
    {
        path:'/invoice/:id',
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
