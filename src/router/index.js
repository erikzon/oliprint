import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import About from '/src/views/About.vue'
import Cotizar from '/src/views/Cotizar.vue'
import Login from '/src/views/Login.vue'
import Favorites from '/src/views/Favorites.vue'
import Admin from '/src/views/Admin.vue'
import Galeria from '/src/views/Galeria.vue'

import { auth } from "../firebase/config";

const requireAuth = (to, from, next) => {
    let user = auth.currentUser
    if (!user) {
        next({ name: 'Login' })
    } else if (user.uid == "pxHuY07zYPUYxyXIJau64jlCDVc2") {
        next({ name: 'Admin' })
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
        path: '/Galeria',
        name: 'Galeria',
        component: Galeria,
    },
    {
        path: '/Favorites',
        name: 'Favorites',
        component: Favorites,
        beforeEnter: requireAuth
    },
    {
        path: '/Admin',
        name: 'Admin',
        component: Admin,
    },

]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router