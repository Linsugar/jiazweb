import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    screenwidth:100,
    loginstatue:false
  },
  mutations: {
    GetloginSattue(){
      console.log('当前状态：',this.state.loginstatue)
      return this.state.loginstatue
    }
  },
  actions: {
  },
  modules: {
  }
})
