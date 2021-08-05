<template>
<div class="loginhome" >

  <div class="videoDiv">
    <video style="object-fit: fill" width="100%" height="100%" autoplay="autoplay" src="../assets/videos/bgvideo.mp4" muted  loop></video>
  </div>

    <div class="fromlogin">
      <el-link type="success" disabled style="margin-top: 10px;margin-bottom: 20px">您距离加入我们还差一步</el-link>
     <el-form>
       <el-form-item>
         <el-input prefix-icon="el-icon-user" placeholder="请输入用户名" v-model="user"></el-input>
       </el-form-item>
       <el-form-item>
         <el-input prefix-icon="el-icon-s-finance" placeholder="请输入密码" v-model="pwd"></el-input>
       </el-form-item>
       <el-form-item>
         <div class="btnItem">
           <el-button type="success" size="mini" @click="login">登录</el-button>
           <el-button type="info" size="mini" @click="LoginClear">清空</el-button>
         </div>
       </el-form-item>
     </el-form>
    </div>

</div>
</template>

<script>
import request from "@/network/request";
let cach = require('../assets/js/LocationStore.js')
export default {
name: "Home-Login",
  data() {
  return {
      user: 'admin',
      pwd: '123456'
  }
  },
  methods: {
    login () {
      request({method:'POST',url:'user/',data:{
          "user_mobile":this.user,
          "password":this.pwd
        }}).then((value)=>{
          console.log(value)
          if(value.data.msg =="成功" && value.data.token != null){
            cach.SetsessionStore("token",value.data.token)
            this.$router.push('/home')
          }else{
            this.$message.error(value.data.msg);
            this.$router.push('/')
          }
      })

    },
    LoginClear(){
      this.user = ""
      this.pwd = ""
    }
  }
}
</script>

<style scoped>
.loginhome {
  width: 100%;
  height: 100%;
}
.videoDiv{
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 10;
}
.fromlogin{
  position: absolute;
  top: 200px;
  right: 0;
  padding: 10px;
  margin: 3px;
  z-index: 10000;
  opacity: 0.9;
  border-radius: 5px;
  width: 250px;
  height:200px;
  background-color: white;
  text-align: center;
}
.btnItem{
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
}
</style>
