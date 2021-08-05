// import Vue from 'vue'
// import Vuex from 'vuex'
//
// Vue.use(Vuex)
//
// export default new Vuex.Store({
//   state: {
//     screenwidth:100,
//     LOADING:false
//   },
//   mutations: {
//     showLoading (state) {
//       state.LOADING = true
//     },
//     hideLoading (state) {
//       state.LOADING = false
//     }
//   },
//   actions: {
//   },
//   modules: {
//   }
// })

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const state = {
  loading: false
  // 请求数据时加载状态loading
}
const getters = {
}
const actions = {

}
const mutations = {
  // 请求数据时loading
  showLoading(state){
    console.log("进入show")
    state.loading = true
    console.log("进入show:"+state.loading)
  },
  hideLoading (state) {
    console.log(state)
    console.log("进入hide")
    state.loading = false
  }
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
