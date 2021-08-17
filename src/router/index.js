import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import About from '/src/views/About.vue'
import Cotizar from '/src/views/Cotizar.vue'
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
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router