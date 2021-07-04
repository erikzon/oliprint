import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import About from '/src/components/About.vue'
import Cotizar from '/src/components/Cotizar.vue'
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