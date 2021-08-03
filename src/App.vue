<template>
  <div id="app">
    <router-view></router-view>
    </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  },
  data(){
    return {

    }
  },
  created() {

  }
}
</script>

<style scoped>
#app {
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
