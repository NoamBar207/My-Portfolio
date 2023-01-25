import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import AboutProjectPage from '../pages/AboutProjectPage.vue'
import AboutMePage from '../pages/AboutMePage.vue'


const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            component: HomePage,
        },
        {
            path: '/about',
            children:[
                {
                    path: '/about/me',
                    component: AboutMePage,
                },
                {
                    path: '/about/project/:_id',
                    component: AboutProjectPage,
                }
            ]
        }
    ]
})

export default router