import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Navigation from './views/Navigation.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/nav',
      name: 'nav',
      component: Navigation,
    },
  ]
})
