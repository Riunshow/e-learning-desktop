import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    routes: [{
            path: '/login',
            name: 'login',
            component: require('@/components/Login').default
        },
        {
            path: '/homepage',
            name: 'homepage',
            component: require('@/components/HomePage').default,
            meta: {
                requireAuth: true
            },
            children: [{
                path: 'discuss',
                name: 'discuss',
                component: require('@/components/Discuss').default,
                meta: {
                    requireAuth: true
                },
            }, {
                path: 'collectdis',
                name: 'collectdis',
                component: require('@/components/CollectDiscuss').default,
                meta: {
                    requireAuth: true
                },
            }, {
                path: 'discussdata',
                name: 'discussdata',
                component: require('@/components/DiscussData').default,
                meta: {
                    requireAuth: true
                },
            }, {
                path: 'classexam',
                name: 'classexam',
                component: require('@/components/ClassExam').default,
                meta: {
                    requireAuth: true
                },
            }, {
                path: 'collectexam',
                name: 'collectexam',
                component: require('@/components/ResultsAnalysis').default,
                meta: {
                    requireAuth: true
                },
            }, {
                path: 'examresults',
                name: 'examresults',
                component: require('@/components/ExamResults').default,
                meta: {
                    requireAuth: true
                },
            }, {
                path: 'liveinfo',
                name: 'liveinfo',
                component: require('@/components/LiveInfo').default,
                meta: {
                    requireAuth: true
                },
            }, {
                path: 'wantlive',
                name: 'wantlive',
                component: require('@/components/WantLive').default,
                meta: {
                    requireAuth: true
                },
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

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        // console.log(to.fullPath)

        if (sessionStorage.length === 0) {
            next({
                path: '/login'
            })
        } else {
            next()
        }
        if (to.fullPath == '/') {
            next({
                path: '/homepage'
            })
        }
        if (sessionStorage.hasRoom == 1) {
            console.log('success')
            if (to.fullPath == '/homepage/wantlive') {
                next({
                    path: '/homepage/liveinfo'
                })
            }
        }
    } else {
        next()
    }
})

export default router;