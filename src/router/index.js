import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../views/Layout.vue'
import Home from '../views/components/home/Home.vue'

import TopCategory from '../views/category'
import Goods from '../views/goods/index.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        { path: '/', component: Home },

      ]
    },
    { path: '/category', component: TopCategory },
    // { path: '/category/sub/', component: SubCategory }
    {
      path: '/goods',
      component: Goods
    }
  ]
})

export default router
