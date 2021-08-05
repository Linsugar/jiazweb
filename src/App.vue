<template>
  <div id="app">
    <router-view></router-view>
    <el-button
        type="primary"
        v-loading.fullscreen.lock="loadState">
    </el-button>
    </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  },
  computed:{
    loadState(){
      return this.$store.state.loading
    }
  },
  data(){
    return {
      fullscreenLoading:this.$store.state.loading
    }
  },
  methods:{

  },

}
</script>

<style scoped>
#app {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
