import Vue from 'vue'
import Router from 'vue-router'
import boss from '@/components/boss'
import joblist from '@/components/joblist'
import wait from '@/components/wait'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'boss',
            component: boss
        },
        {
            path: '/joblist',
            name: 'joblist',
            component: joblist
        },
        {
            path: '/wait',
            name: 'wait',
            component: wait
        }
    ]
})