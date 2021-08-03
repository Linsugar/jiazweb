<template>
<div class="loginhome">
  <div class="login-right">
    <img src="../assets/image/backgroundimag.jpg" style="width: 100%;height: 100%;border-radius: 10px 0 0 10px"/>
  </div>
  <div class="login-left">
    <div class="login-left-header">
      <p>用户登录</p>
    </div>
    <div class="login-left-from">
      <form class="user-form">
        <div>
          <el-input v-model="inputuser" icon="el-icon-search" placeholder="请输入用户名" prefix-icon="el-icon-service" style="margin: 5px"></el-input>
        </div>
        <div>
          <el-input icon="el-icon-search" v-model="inputpwd" placeholder="请输入密码" prefix-icon="el-icon-service" style="margin: 5px"></el-input>
        </div>
        <el-switch
            v-model="value3"
            active-text="在线"
            inactive-text="隐身">
        </el-switch>
        <div class="form-btn">
          <el-button type="primary" size="mini" style="width: 100px;height: 40px">注册</el-button>
          <el-button type="success"size="mini" style="width: 100px;height: 40px" @click="login(inputuser,inputpwd)">登录</el-button>
        </div>
      </form>
    </div>
  </div>

</div>
</template>

<script>
import request from "@/network/request";

let a = require('../assets/js/LocationStore.js')
export default {
name: "Home-Login",
  data() {
  return {
      input:'',
      value3: true,
      value4: true,
      inputuser: '17608242415',
      inputpwd: '123456'
  }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
    login (u,p) {
      request({method:'get',url:'http://192.168.4.49:8883/demo/auto/'}).then((value)=>{
        console.log(value)
      })
      if(u==='17608242415'&& p==='123456'){
        a.SetsessionStore("Token",111)
        this.$router.push('/home')
      }else {
        alert("密码错误")
        console.log("失败状态",this.$store.state.loginstatue)
        this.$router.push('/')
      }

    }
  }
}
</script>

<style scoped>
.loginhome {
  width: 600px;
  height: 250px;
  border-radius: 10px;
  box-shadow: 0px 0px 3px rebeccapurple;
  display: flex;
}
.login-right {
  flex: 6;
  border: 1px solid rebeccapurple;
  border-radius:10px 0 0 10px;
}
.login-left {
  flex: 4;
  border: 1px solid rebeccapurple;
  border-radius:0 10px 10px 0;
  display: flex;
  flex-direction: column;
}
.login-left-header {
  display: flex;
  flex: 2;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  line-height: 50px;
  font-size: 15px;
}
.login-left-from {
  flex: 8;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.user-form{
  width:80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form-btn {
  display: flex;
  flex-direction: row;
  margin-top: 10px;
}
</style>
