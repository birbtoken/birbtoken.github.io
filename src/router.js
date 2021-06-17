import Vue from 'vue'
import Router from 'vue-router'
//import Router from './hash-router.vue'

import Home from './views/Home.vue' 
import Claim from './views/Claim.vue' 
import Farm from './views/Farm.vue' 



import NotFound from './views/NotFound.vue'

Vue.use(Router)

export default new Router({
//  mode: 'history',
//  base: process.env.PUBLIC_URL,
  routes: [

    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/#',
      name: 'home',
      component: Home
    },

    {
      path: '/claim',
      name: 'claim',
      component: Claim
    },
    {
      path: '/farm',
      name: 'farm',
      component: Farm
    },
    
    {
      path: '/*',
      component: NotFound
    },
  ]
})
