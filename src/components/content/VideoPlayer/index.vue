<template>
<div style="width: 100%;height: 100%">
  <div>
    <el-descriptions title="视频清单" :column="3" border>
      <el-descriptions-item label="主题">
        <el-tag>{{videoData.video_Title}}</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="时间">{{videoData.video_Time}}</el-descriptions-item>
      <el-descriptions-item label="投放者">{{videoData.video_User}}</el-descriptions-item>
      <el-descriptions-item label="封面">
        <el-image :src="videoData.video_Image" fit="contain" style="width: 50px;height: 50px"></el-image>
      </el-descriptions-item>
      <el-descriptions-item label="播放地址">{{videoData.video_url}}</el-descriptions-item>
      <el-descriptions-item label="在线观看">
        <el-button type="success" size="mini" @click="changeVideo">{{videoText}}</el-button>
      </el-descriptions-item>
    </el-descriptions>
    <div style="width: 100%;height: 400px;display: flex;flex-direction: column;align-items: center;margin-top: 50px">
      <div>
        <video id="controlVideo" width="440" height="500"  :src="videoData.video_url" muted  loop></video>
      </div>
    </div>
  </div>
<!--  {{videoData}}-->
</div>
</template>

<script>
export default {
name: "index",
  data(){
  return{
    videoData:"",
    videoText:"播放"
  }
  },
  mounted() {
  console.log(this.$route.params.data)
    this.videoData = this.$route.params.data
  },
  methods:{
    changeVideo(){
      let myVideo = document.getElementById('controlVideo')
      if(this.videoText == "播放"){
        this.videoText = "暂停"
        myVideo.play()
      }else{
        this.videoText = "播放"
        myVideo.pause()
      }
  }
  }
}
</script>

<style scoped>

</style>
