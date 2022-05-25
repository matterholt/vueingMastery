import Vue from 'vue';
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LandingHeader from "@/components/LandingHeader"
import ThreadLanding from '@/components/ThreadLanding'


Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            name:'hello',
            component:HelloWorld
        },
        {
            path:'/landing',
            name:'landingPage',
            component: LandingHeader
        },
        {
            path:'/thread/:id',
            name:'ThreadLanding',
            component: ThreadLanding,
            props:true
        }
    ],
    mode:'history'
})