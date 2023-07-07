import { createStore } from 'vuex'

import category from './modules/category'
// 创建vuex仓库并导出
export default createStore({
  state: {
    // 数据
  },
  mutations: {
    // 改数据函数
  },
  actions: {
    // 请求数据函数
  },
  modules: {
    // 分模块
    category
  },
  getters: {
    // vuex的计算属性
  }
})