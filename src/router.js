import Vue from 'vue'
import Router from 'vue-router'
import Counter from './components/Counter.vue'
import Home from './components/Home.vue'
import ViewName from './components/ViewName.vue'

const routes= [
    { path: '/', name: 'Home', component: Home },
    { path: '/counter', name: 'Counter', component: Counter },
    { path: '/user/:name', name: 'ViewName', component: ViewName },
]

Vue.use(Router)

export default new Router({ routes })