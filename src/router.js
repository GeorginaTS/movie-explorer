import { createRouter, createWebHashHistory } from 'vue-router'

import About from "./views/About.vue"
import Home from "./views/Home.vue"
import List from "./views/List.vue"

const routes = [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/movies", component: List },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})