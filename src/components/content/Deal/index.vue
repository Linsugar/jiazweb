<template>
  <div>
    <el-descriptions class="margin-top" title="反馈具体情况" :column="3" :size="size" border>
      <template slot="extra">
        <el-button type="primary" size="small">操作</el-button>
      </template>
      <el-descriptions-item >
        <template slot="label">
          <i class="el-icon-user"></i>
          用户名
        </template>
        {{userinfo.username}}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-mobile-phone"></i>
          手机号
        </template>
        {{userinfo.user_mobile}}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-location-outline"></i>
          居住地
        </template>
        {{userinfo.city}}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-tickets"></i>
          反馈时间
        </template>
        {{data.feedback_time}}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-office-building"></i>
          反馈内容
        </template>
        {{data.feedback_context}}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-office-building"></i>
          反馈回复
        </template>
        {{data.feedback == "等待处理"?"等待处理":"已处理"}}
      </el-descriptions-item>
    </el-descriptions>
    <div style="text-align: center">
      <el-input
          maxlength="150"
          minlength="5"
          type="textarea"
          :rows="2"
          placeholder="请输入内容"
          v-model="textarea"
          style="width: 50%;margin-top: 100px"
      >
      </el-input>
    </div>
    <div style="display: flex;flex-direction: row;justify-content: center;margin-top: 100px">
      <el-button type="primary" size="mini" @click="openSumbit">提交</el-button>
      <el-button type="success" @click="clearValue">清空</el-button>
    </div>

  </div>
</template>

<script>
import request from "@/network/request";

export default {
name: "index",
  created() {
  console.log("我是传过来的数据："+this.$route.query.data)
    this.data = this.$route.query.data
    this.getUserInfo(this.$route.query.data.feed_id)
  },
  data(){
  return {
    data:"",
    textarea:"",
    userinfo:""
  }
  },
  methods:{
    openSumbit(){
      if(this.textarea.length <2){
        this.$alert("小老弟有问题？")
      }else{
        request({
          url:"feedeal/",
          method: "POST",
          data:{
            feed_id:this.data.feed_createID,
            feed_content:this.textarea
          }
        }).then(value => {
          console.log(value)
          this.$notify({
            title: '成功',
            message: value.data.msg,
            type: 'success',
            duration:2000,
          });
          this.textarea = ""
        })
      }

    },
    clearValue(){
      this.textarea = ""
    },
  getUserInfo(userid){
  //  获取用户信息
    request({
      url:"user/",
      methods: "GET",
      params: {
        user_id: userid
      }
    }).then(value => {
      console.log(value)
      this.userinfo = value.data
    })
  }
  }
}
</script>

<style scoped>

</style>
