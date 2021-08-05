<template>
<div style="width: 100%;height: 100%;display: flex;flex-direction: row;flex-wrap: wrap">
<div style="width: 400px;height: 400px;background-color:#409EFF;margin-left: 5px;padding: 5px;border-radius: 5px" v-for="item in DyImageLsit">
  <div style="display:flex;flex-direction: row;">
    <el-avatar :size="size" :src="item.Up_avator"></el-avatar>
    <div style="margin-top: 10px;margin-left: 10px">
      <div>{{item.Up_name}}</div>
      <div>{{item.Up_Title}}</div>
    </div>
  </div>
  <div style="margin-left: 50px">
    内容：{{item.Up_Context}}
  </div>
  <div style="display: flex;flex-direction: row;flex-wrap: wrap;margin-top: 10px">
    <div class="block" v-for="img in JSonImage(item.Up_ImageUrl)" style="margin: 5px">
      <div class="imageview">
        <el-image :src="img" style="border-radius: 5px;width: 100%;height: 100%" fit="cover"></el-image>
      </div>
    </div>
  </div>
</div>
</div>
</template>






<script>
import request from "@/network/request";

export default {
name: "index",
  created() {
  this.GetAllDyImage()
  },
  data(){
  return {
    DyImageLsit:"111",
    src:"https://thirdwx.qlogo.cn/mmopen/vi_32/AH3uEYUVGPdxgMic6eCAx8LJdibgx0Z2gVeJO5yOhZ3VsLqdtxue2egPsdlmtSw0uBh63hazibChicvdtnUIPQlS6w/132"
  }
  },
  methods:{
  GetAllDyImage(){
    request({
      url:"DyImage/",
      method:"GET"
    }).then(value => {console.log(value)
      this.DyImageLsit = value.data
    })
  },
    JSonImage(data){
      console.log(data)
      console.log(typeof data)
    let dat = JSON.parse(data)
      console.log(dat)
      return dat
    }
  }
}
</script>

<style scoped>

.box-card {
  width: 40%;
  margin: 10px;
}

.imageview{
  margin-left: 10px;
  width:100px;
  height: 100px;
}

</style>
