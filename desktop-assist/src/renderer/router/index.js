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
            component: require('@/components/HomePage').default,
            children: [{
                path: 'discuss',
                name: 'discuss',
                component: require('@/components/Discuss').default,
            }, {
                path: 'collectdis',
                name: 'collectdis',
                component: require('@/components/CollectDiscuss').default,
            }, {
                path: 'discussdata',
                name: 'discussdata',
                component: require('@/components/DiscussData').default,
            }, {
                path: 'classexam',
                name: 'classexam',
                component: require('@/components/ClassExam').default,
            }, {
                path: 'collectexam',
                name: 'collectexam',
                component: require('@/components/ResultsAnalysis').default,
            }, {
                path: 'examresults',
                name: 'examresults',
                component: require('@/components/ExamResults').default,
            }, {
                path: 'liveinfo',
                name: 'liveinfo',
                component: require('@/components/LiveInfo').default,
            }]
        },
        {
            path: '/',
            redirect: '/login'
        }, {
            path: '/template',
            name: 'template',
            component: require('@/components/common/Template').default,
        }, {
            path: '*',
            redirect: '/template'
        }
    ]
})