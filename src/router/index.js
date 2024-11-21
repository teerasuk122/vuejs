import { createRouter , createWebHistory } from "vue-router";

const routes = [
    { 
        path: '/',
        component: () => import("../pages/index.vue"),
        name:'Home',
     
    },
    { 
        path: '/Login',
        component: () => import("../pages/auth/login.vue"),
        name:'Login',
     
    },
    { 
        path: '/Register',
        component: () => import("../pages/auth/register.vue"),
        name:'Register',
     
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  })

  export default router