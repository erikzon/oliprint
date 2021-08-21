import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import About from '/src/views/About.vue'
import Cotizar from '/src/views/Cotizar.vue'
import Login from '/src/views/Login.vue'
import Favorites from '/src/views/Favorites.vue'

import { auth } from "../firebase/config";

const requireAuth = (to, from, next) => {
    let user = auth.currentUser
    if (!user) {
        next({ name: 'Login' })
    } else {
        next()
    }
}

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/About',
        name: 'About',
        component: About,
    },
    {
        path: '/Cotizar',
        name: 'Cotizar',
        component: Cotizar,
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/Favorites',
        name: 'Favorites',
        component: Favorites,
        beforeEnter: requireAuth
    },
    
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router