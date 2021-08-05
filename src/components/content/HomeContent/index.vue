<template>
  <div style="width: 100%;height: 100%">
    <el-carousel :interval="4000" type="card" height="250px">

      <el-carousel-item v-for="video_item in videoList" :key="video_item">
        <router-link :to="{name:'videotab',params:{data:video_item}}">
        <el-image :src="video_item.video_Image" class="medium"> </el-image>
        </router-link>
      </el-carousel-item>
    </el-carousel>
    <el-divider content-position="left">优秀好文</el-divider>
    <el-collapse accordion>
      <div style="display: flex;flex-direction: row;padding: 3px" v-for="item in articleList">
        <div style="flex: 1">
          <el-image :src="item.content.news_item[0].thumb_url" style="border-radius: 5px;margin-right: 5px"></el-image>
        </div>
        <div style="flex: 19">
          <el-collapse-item :title="item.content.news_item[0].title">
            <div>
              作者：{{item.content.news_item[0].author}}
            </div>
            <el-link :href="item.content.news_item[0].url" type="success">
              <div>{{ item.content.news_item[0].digest.length == 0?"请直接跳转页面":item.content.news_item[0].digest }}</div>
            </el-link>

          </el-collapse-item>
        </div>
      </div>
    </el-collapse>

  </div>

</template>

<script>
import request from "@/network/request";

export default {
name: "index",
  data(){
  return {
    activeIndex: '1',
    activeIndex2: '1',
    urls: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    articleList:[],
    videoList:[]
  }
  },
  created() {
    this.getwxArticl()
    this.getvideo()
  },
  methods:{
  getwxArticl(){
  //  获取微信文章
    request({
      url:"wxarticle/",
      params:{
        "count":5
      },
      method:'GET'
    }).then(value => {
      let Data = JSON.parse(value.data)
      this.articleList =Data.item
    })
  },
    getvideo(){
      request({
        url:"videolist/",
        method:'GET'
      }).then(value => {
        console.log(value)
        this.videoList = value.data
      })
    },
  },

}
</script>

<style scoped>
.el-carousel__item h3 {
  border-radius: 5px;
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 300px;
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
