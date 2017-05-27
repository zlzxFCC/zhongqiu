import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import { routerMode } from './config/env'
import Wilddog from 'wilddog'
import WildVue from 'wildvue'

import Edit from './components/Edit'
import Result from './components/Result'
import Answer from './components/Answer'

Vue.use(VueRouter)
Vue.use(Wilddog)
Vue.use(WildVue)

Vue.config.productionTip = false

const router = new VueRouter({
    routes,
    mode: routerMode,
    strict: process.env.NODE_ENV !== 'production'
})

router.beforeEach((to, from, next) => {
    if (from.name === 'edit' && to.name === 'result') {
        vm.fromEdit = true
    }
    if (from.name === 'answer' && to.name === 'result') {
        vm.fromAnswer = true
    }
    next()
})


var wilddogApp = Wilddog.initializeApp({
    syncURL: 'https://lie.wilddogio.com/'
})

var sync = wilddogApp.sync()
let ref = sync.ref('/lie')

let vm = new Vue({
    router,
    wilddog: {
        ref: ref,
        userInfo: {
            source: sync.ref('/lie'),
            // 可选，作为对象绑定
            asObject: true,
            // 可选，提供一个回调
            cancelCallback: function() {}
        }
    }
}).$mount('#app')
