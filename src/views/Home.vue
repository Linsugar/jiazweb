<template>
  <el-container style="width: 100%;height: 100%;display: flex;flex-direction: column">
    <el-header style="flex:1">
      <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1" >
            <router-link :to="{name:'HomeContent'}">
              首选推文
            </router-link>
          </el-menu-item>
          <el-menu-item index="2-2" @click="centerDialogVisible = true">我的小程序</el-menu-item>
          <el-menu-item index="2-3">我的App</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">消息中心</el-menu-item>
         <el-menu-item index="4" @click="feedback">
           <router-link :to="{name:'feedback'}">
           反馈管理
           </router-link>
         </el-menu-item>
      </el-menu>
    </el-header>
    <el-main style="flex: 17;background-color: white">
     <router-view></router-view>
    </el-main>
    <el-dialog
        title="小程序"
        :visible.sync="centerDialogVisible"
        width="30%"
        center>
      <el-image :src="urls" ></el-image>
    </el-dialog>
  </el-container>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  data(){
    return {
      centerDialogVisible:false,
      urls: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
      isCollapse: true,
      activeName: '',
      listTable:[
        {name:"首页",ico:"el-icon-setting",index:"1"},
        {name:"角色管理",ico:"el-icon-star-off",index:"2"},
        {name:"用户管理",ico:"el-icon-star-off",index:"3"},
        {name:"消息审核管理",ico:"el-icon-star-off",index:"4"},
        {name:"发布消息管理",ico:'el-icon-star-off',index:"5"},
      ]
    }
  },
  components: {
  },
  methods: {
    alertevent(){
      console.log("弹窗")
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    switchRouter(index){
      console.log(index)
      switch (index) {
        case 0:{
          this.$router.push('/charts')
          break;
        }
        case 1:{
          this.$router.push('/home')
          break;
        }
        case 2:{
          this.$router.push('/Preselect')
          break;
        }
        case 3:{
          this.$router.push('/messagecheck')
          break;
        }
        case 4:{
          this.$router.push('/sendmessage')
          break;
        }
      }
    }
  },
  created() {
  }
}
</script>

<style scoped>
.el-carousel__item h3 {
  border-radius: 5px;
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  background-image: url("https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg");
}

.el-carousel__item:nth-child(2n) {
  background-color: #d3dce6;
  border-radius: 5px;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
  border-radius: 5px;
}
</style>
