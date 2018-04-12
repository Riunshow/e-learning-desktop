import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/login',
            name: 'login',
            component: require('@/components/Login').default
        },
        {
            path: '/homepage',
            name: 'homepage',
            component: require('@/components/HomePage').default
        },
        {
            path: '*',
            redirect: '/login'
        }
    ]
})